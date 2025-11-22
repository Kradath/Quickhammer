import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { sortedRules } from './SortedRules.js';

export function useLazyLoad(initialItems, selectedType, itemsPerPage = 10) {
  // переменные
  const currentPage = ref(0);
  const displayedItems = ref([]);
  const loading = ref(false);
  const hasMore = ref(true);
  const loader = ref(null);
  let observer = null;

  
  const filteredItems = computed(() => {
    const weaponsArray = Object.values(sortedRules(initialItems));
    if (selectedType.value === "-") {
      return weaponsArray.filter((weapon) => weapon.cathegory);
    } else {
      return weaponsArray.filter(
        (weapon) => weapon.cathegory === selectedType.value
      );
    }
  });

  const totalItems = computed(() => filteredItems.value.length);

  // подгружаем данные
  function loadMore() {
    if (loading.value || !hasMore.value) return;
    
    loading.value = true;
    const startIndex = currentPage.value * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newItems = filteredItems.value.slice(startIndex, endIndex);
    
    displayedItems.value.push(...newItems);
    currentPage.value++;
    loading.value = false;
    hasMore.value = endIndex < totalItems.value;
  }

  // сбрасываем пагинацию
  function resetPagination() {
    currentPage.value = 0;
    displayedItems.value = [];
    hasMore.value = true;
    loadMore();
  }

  // переподключение наблюдателя, чтобы срабатывал при переключении категории
  function reconnectObserver() {
    if (observer) {
      observer.disconnect();
    }
    
    nextTick(() => {
      if (loader.value && hasMore.value) {
        observer.observe(loader.value);
      }
    });
  }

  // вулючаем наблюдателя
  function initObserver() {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore.value && !loading.value) {
          loadMore();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
    reconnectObserver();
  }

  // еще наблюдатели
  watch(selectedType, () => {
    resetPagination();
    reconnectObserver();
  });

  watch(displayedItems, () => {
    if (hasMore.value) {
      reconnectObserver();
    }
  });

  
  onMounted(() => {
    initObserver();
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    displayedItems,
    loading,
    hasMore,
    loadMore,
    resetPagination,
    filteredItems,
    loader // возвращаем ref для элемента-загрузчика
  };
}