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
                            <div class="left-section">
                                <div class="nav-items">
                                    <a  style="font-weight: 700;" href="#">Domů</a>
                                    <a style="font-weight: 700;" href="#">Přehled nabídky</a>
                                    <a style="font-weight: 700;" href="#">O nás</a>
                                </div>
                            </div>
                            <div class="right-section">
                                <div class="lang-buttons">
                                    <button class="lang-button active" data-lang="cz">CZ</button>
                                    <button class="lang-button" data-lang="en">EN</button>
                                </div>
                                <div class="auth-buttons">
                                    <button>Register</button>
                                    <button>Sign in</button>
                                </div>
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

.left-section {
    margin-left: 50px; /* Adjust margin as needed */
}

.nav-items {
    display: flex;
    list-style: none;
    margin: 50px;
    padding: 50px;
}

.nav-items a {
    text-decoration: none;
    color: #333; /* Adjust color as needed */
    margin-right: 20px;
}

.right-section {
    margin-right: 20px; /* Adjust margin as needed */
}

.lang-buttons, .auth-buttons {
    display: flex;
    align-items: center;
}

.lang-buttons button, .auth-buttons button {
    background: none;
    border: none;
    color: #333; /* Adjust color as needed */
    cursor: pointer;
    margin-left: 10px;
    padding: 5px 10px;
}

.lang-button.active {
    background-color: #f0f0f0; /* Adjust background color as needed */
}
</style>