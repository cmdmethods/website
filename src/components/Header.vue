<template>
    <header>
        <nav>
            <ul>
                <li class="nav-links"><NavLinks /></li>
                <li class="search-bar"><SearchBar :value="searchQuery" @input="$emit('update:searchQuery', $event)" /></li>
                <div class="spacer" />
                <li><NewProjectButton></NewProjectButton></li>
                <li class="profile-icon"><ProfileIcon></ProfileIcon></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import NewProjectButton from '@/components/NewProjectButton.vue'
import SearchBar from '@/components/SearchBar.vue'
import ProfileIcon from '@/components/ProfileIcon.vue'
import NavLinks from '@/components/NavLinks.vue'

export default {
    name: 'Header',
    components: { NavLinks, SearchBar, NewProjectButton, ProfileIcon },
    props: {
        searchQuery: String
    }
}
</script>

<style scoped>
header {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: var(--body-background);
    z-index: 4;
    height: 46px;
}

nav {
    width: 100%;
    height: 2.8125rem;
    background-color: #ffffff;
}

ul {
    margin: 0;
    padding: 0;
    height: 2.8125rem;
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0 0.9375rem 0 0.9375rem;
}

.nav-links {
    flex-grow: 2;
}

.spacer {
    flex-grow: 2;
    align-self: center;
}

.search-bar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.profile-icon {
    padding: 0 0 0 0.9375rem;
    align-self: flex-end;
}
</style>
