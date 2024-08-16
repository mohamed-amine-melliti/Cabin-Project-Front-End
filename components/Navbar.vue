<template>
    <section class="z-10 w-full bg-white shadow-sm">

        <Container>
            <nav class="flex flex-col w-full max-md:max-w-full">
                <div
                    class="flex flex-wrap justify-between items-center px-12 w-full bg-white border-b border-black border-opacity-40 shadow-[0px_1px_1px_rgba(0,0,0,0.13)] max-md:px-5 max-md:max-w-full">
                    <div class="flex items-start self-stretch py-6 my-auto w-8">
                        <a href="/">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d94eb955a9911f127502f228d4b5bd9c7d8dfc5042ed9c3733608221b0d7c07?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd"
                                alt="Company Logo" class="object-contain w-8 aspect-square" />
                        </a>
                    </div>
                    <div
                        class="flex flex-wrap flex-1 shrink gap-10 items-center self-stretch pl-12 my-auto text-sm font-semibold leading-none text-black basis-0 min-w-[240px] max-md:max-w-full">
                        <a href="#" class="self-stretch my-auto">Domů</a>
                        <a href="#" class="self-stretch my-auto">Přehled nabídky</a>
                        <a href="#" class="self-stretch my-auto">O nás</a>
                    </div>
                    <div
                        class="flex flex-wrap gap-6 items-center self-stretch py-2 pr-2 pl-4 my-auto text-sm leading-6 text-blue-600 rounded-[40px]">

                        <div class="menu">
                            <ul class="dropdown">
                                <li>
                                    <a href="#">
                                        <img src="/cz.svg" alt="User Icon"
                                            class="object-contain shrink-0 self-stretch my-auto aspect-[1.37] w-[26px]" />
                                        Option 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/cz.svg" alt="User Icon"
                                            class="object-contain shrink-0 self-stretch my-auto aspect-[1.37] w-[26px]" />
                                        Option 2
                                    </a>
                                </li>
                            </ul>
                        </div>



                        <div class="flex gap-4 justify-center items-center self-stretch my-auto">
                            <MenuItem label="Sign Up" 
                                href="/register" />
                            <div class="flex shrink-0 self-stretch my-auto w-px bg-zinc-300 h-[22px]"></div>
                            <MenuItem label="Login"  href="/login" />
                        </div>
                    </div>
                </div>
            </nav>
        </Container>

        <Categories />
    </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar',
});
</script>

<style scoped>
.menu {
    position: relative;
    display: inline-block;
}

.dropdown {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: none;
    /* Hidden by default */
    position: absolute;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 100;
}

.menu:hover .dropdown {
    display: block;
    /* Show dropdown on hover */
}

.dropdown li {
    padding: 8px 16px;
}

.dropdown li a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
}

.dropdown li a:hover {
    background-color: #f1f1f1;
}
</style>