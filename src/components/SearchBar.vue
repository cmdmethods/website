<template>
    <div class="search-container">
        <input @input="onSearch" :value="value" type="search" placeholder="Search Cards" />
    </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
    name: 'SearchBar',
    props: {
        value: String
    },
    methods: {
        onSearch(event) {
            this.$emit('input', event.target.value)
        }
    },
    created() {
        this.onSearch = debounce(this.onSearch, 400)
    }
}
</script>

<style scoped>
input {
    width: 28.125rem;
    height: 1.5625rem;
    border: none;
    background-color: #ececed;
    border-radius: 3px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.875rem;
    text-align: center;
    background-repeat: no-repeat;
}

input:hover {
    background-color: #d9d9da;
}

input:focus::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #ececed;
}
input:focus:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ececed;
    opacity: 1;
}
input:focus::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ececed;
    opacity: 1;
}
input:focus:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #ececed;
}

input:focus:hover {
    background-color: #ececed;
}
</style>
