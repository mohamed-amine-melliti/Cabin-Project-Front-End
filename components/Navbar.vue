<script lang="ts" setup></script>

<template>
  <section class="z-10 w-full bg-white shadow-sm">
    <div class="p-4 border-b-2">
      <Container>
        <nav class="flex items-center justify-between flex-grow gap-3 md:gap-0">
          <!---- <NavLogo />
          <NavSearch />
          <NavUserMenu /> --->
          
          <header>
        <div class="container">
            <div class="logo">
                <img src="/logo.png" alt="Logo">
            </div>  

            <nav>
                <ul>
                    <li><a href="#">Domů</a></li>
                    <li><a href="#">Přehled nabídky</a></li>
                    <li><a href="#">O nás</a></li>
                </ul>
            </nav>
            <div class="lang-buttons">
                <button>CZ</button>
                <button>EN</button>
            </div>
            <div class="auth-buttons">
                <button>Register</button>
                <button>Sign in</button>
            </div>
        </div>
    </header>

        </nav>
      </Container>
    </div>
    <Categories />
  </section>
</template>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

header {
    height: 60px; /* Adjust height as needed */
    background-color: #fff; /* Adjust background color */
    display: flex;
    align-items: center;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px; /* Adjust max-width as needed */
    margin: 0 auto;
}

.logo img {
    width: 40px; /* Adjust width as needed */
    height: auto;
}

nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

nav li {
    margin-right: 50px;
}

nav a {
    text-decoration: none;
    color: #333; /* Adjust color as needed */
}

.lang-buttons, .auth-buttons {
    display: flex;
    align-items: flex-end;
}

.lang-buttons button, .auth-buttons button {
    background: none;
    border: none;
    color: #333; /* Adjust color as needed */
    cursor: pointer;
    margin-left: 10px;
}
</style>