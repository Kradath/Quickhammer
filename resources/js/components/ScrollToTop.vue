    <template>
  <button @click="scrollToTop" class="topScroll" v-show="showButton">
    
  </button>
</template> 
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const showButton = ref(false);
const threshold = 800;
function scrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
function handleScroll() {
  const y = window.scrollY ?? window.pageYOffset ?? 0;
  showButton.value = y > threshold;
}
onMounted(() => {
  if (typeof window !== "undefined") {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
});
onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script> 