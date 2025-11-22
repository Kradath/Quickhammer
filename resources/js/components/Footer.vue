<template>
  <footer>
    <div class="social-icons">

      <a
        href="https://boosty.to/quickhammer"
        target="_blank"
        aria-label="Бусти"
        
      >
        <img src="../icons/busty.png" alt="" width="30px" height="30px">

      </a>


      <a href="https://t.me/quickhammer" target="_blank" aria-label="Телеграм" >
        <img src="../icons/telegram.png" alt="" width="30px" height="30px">
      </a>

      
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: #222;
  padding: 10px 0;
  display: flex;
  justify-content: center;
}

.social-icons {
  display: flex;
  gap: 20px; /* Расстояние между иконками */
}

.social-icons a {
  color: #fff; /* Цвет иконок */
  font-size: 24px; /* Размер иконок */
  text-decoration: none;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #1da1f2; /* Цвет при наведении (например, для ТГ) или можно оставить универсальный цвет */
}

/* Медиазапросы для мобильных устройств (опционально) */
@media (max-width: 600px) {
  .social-icons a {
    font-size: 20px;
    margin: 0 10px;
  }
}
</style>