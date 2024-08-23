<template>

    <nav class="flex flex-col pt-12 text-xs font-semibold text-zinc-400">

        <ul class="flex flex-wrap gap-1.5 justify-center items-center p-2.5 w-full bg-black max-md:max-w-full">

            <li v-for="(item, index) in navigationItems" :key="index" class="flex-1 shrink">

                <button :class="[

                    'gap-1.5 self-stretch px-4 py-1.5 my-auto min-h-[23px] rounded',

                    index === 0 ? 'text-black bg-white rounded-[34px_3px_3px_39px]' : 'bg-neutral-800'

                ]" @click="handleNavigation(item)" :aria-current="index === 0 ? 'page' : undefined">

                    {{ item }}

                </button>

            </li>

        </ul>

    </nav>

</template>


<script lang="ts">

export default defineComponent({

    name: 'NavigationBar',

    data() {

        return {

            navigationItems: [

                'type ',

                'things ',

                'Photos',

                'Description',

                'Finish up',

                'hosting',

                'Location',

                'Details',

                'Renting',

                'Price',

                'Discounts',

                'Rooms',

                'amenities',

                'billing'

            ]

        };

    },
    methods: {

        handleNavigation(item: string) {

            // Handle navigation logic here

            console.log(`Navigating to: ${item}`);

        }

    }

});

</script>
