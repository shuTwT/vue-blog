<template>
    <div class="content">
        <header>
            <div class="wrapper">
                <nav>
                    <RouterLink to="/">首页</RouterLink>
                    <RouterLink to="/about">关于</RouterLink>
                </nav>
            </div>
        </header>
        <RouterView />
        <MyFooter></MyFooter>
    </div>
</template>


<script lang="ts" setup>
import MyFooter from '@/components/MyFooter.vue'
import { RouterLink, RouterView } from "vue-router";
</script>


<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: normal;

    header {
        line-height: 1.5;
        max-height: 100vh;
        margin-bottom: 50px;

        .wrapper {
            nav {
                font-size: 12px;
                text-align: center;
                width: auto;

                a {
                    display: inline-block;
                    padding: 0 1rem;
                    border-left: 1px solid var(--color-border);
                }

            }
        }
    }
}



@media screen and (min-width: 768px) {

    header {
        display: flex;
        align-items: center;
    }

    header .wrapper {
        display: flex;
        align-items: center;
    }

    nav {
        text-align: left;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

}
</style>
