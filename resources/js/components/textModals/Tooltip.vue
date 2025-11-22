
<template>
  <span
    ref="el"
    @mouseenter="handleShow"
    @mouseleave="handleHide"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    class="tooltip-word"
  >
    <span class="tooltip">{{ word }}</span>

    <teleport to="body">
      <div
        v-if="show"
        :style="tooltipStyles"
        v-html="tooltipText"
        @touchstart="handleTooltipTouch"
        class="mobile-tooltip"
      >
        
      </div>
    </teleport>
  </span>
</template>

<script setup>
import { ref, computed, watch, nextTick, onUnmounted } from 'vue';

defineProps({
  word: String,
  tooltipText: String,
});

const show = ref(false);
const el = ref(null);
const touchTimer = ref(null);


const isMobile = () => {
  return window.innerWidth <= 768 || 'ontouchstart' in window;
};

// показ/скрытие
const handleShow = () => {
  if (touchTimer.value) {
    clearTimeout(touchTimer.value);
    touchTimer.value = null;
  }
  show.value = true;
};

const handleHide = () => {
  if (!touchTimer.value) {
    show.value = false;
  }
};

// то же самое для тач устройств
const handleTouchStart = (event) => {
  event.preventDefault();
  touchTimer.value = setTimeout(() => {
    handleShow();
  }, 200);
};

const handleTouchEnd = (event) => {
  if (touchTimer.value) {
    clearTimeout(touchTimer.value);
    touchTimer.value = null;
  }
};

// обработчик тапа по самому тултипу
const handleTooltipTouch = (event) => {
  event.stopPropagation();
};

// закрытие при клике вне области
const handleClickOutside = (event) => {
  if (el.value && !el.value.contains(event.target) && 
      !event.target.closest('.mobile-tooltip')) {
    show.value = false;
  }
};

// следим за show, чтобы добавить/убрать обработчики
watch(show, (val) => {
  if (val) {
    setTimeout(() => document.addEventListener('click', handleClickOutside), 0);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
});


const tooltipStyles = computed(() => {
  if (isMobile() && show.value) {
    // для мобильных
    return {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#333',
      color: '#fff',
      padding: '20px',
      borderRadius: '10px',
      zIndex: 10000,
      pointerEvents: 'auto',
      maxWidth: '90vw',
      maxHeight: '80vh',
      width: 'auto',
      overflowY: 'auto',
      fontSize: '16px',
      lineHeight: '1.4',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      border: '2px solid #555',
    };
  } else {
    // для десктопа
    return {
      position: 'fixed',
      top: '0',
      left: '0',
      background: '#333',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: '4px',
      zIndex: 9999,
      pointerEvents: 'none',
      maxWidth: '300px',
      fontSize: '14px',
      lineHeight: '1.4',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    };
  }
});

// позицонирование на десктопе
const setDesktopPosition = async () => {
  await nextTick();
  if (el.value && !isMobile() && show.value) {
    const rect = el.value.getBoundingClientRect();
    const tooltip = document.querySelector('.mobile-tooltip');
    if (tooltip) {
      tooltip.style.top = `${rect.bottom + 8}px`;
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.transform = 'translateX(-50%)';
    }
  }
};


watch(show, (val) => {
  if (val) {
    if (!isMobile()) {
      setDesktopPosition();
    }
  }
});


onUnmounted(() => {
  if (touchTimer.value) {
    clearTimeout(touchTimer.value);
  }
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: #ff3742;
}


/* Стили для скролла на мобильных */
:deep(.mobile-tooltip) {
  scrollbar-width: thin;
  scrollbar-color: #666 transparent;
}

:deep(.mobile-tooltip::-webkit-scrollbar) {
  width: 6px;
}

:deep(.mobile-tooltip::-webkit-scrollbar-thumb) {
  background: #666;
  border-radius: 3px;
}

:deep(.mobile-tooltip::-webkit-scrollbar-track) {
  background: transparent;
}
</style>