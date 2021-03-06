<template>
    <div class="home">
        <Header :search-query.sync="searchQuery" />
        <div class="more-info-section">
            <MoreInfo v-for="info in info" :key="info.id" :title="info.title" :text="info.text" />
        </div>

        <SortBar v-if="hasSearch === false" />

        <div class="cards">
            <template v-if="hasSearch">
                <div class="grid">
                    <Card @click="activateCard(card.id)" v-for="card in cardsSearchResult" :key="card.id" v-bind="card" />
                </div>
            </template>

            <div v-else class="category" v-for="category in cardsGrouped" :key="category.id" :id="category.id">
                <CategoryHeader v-bind="category" />

                <div class="grid">
                    <Card @click="activateCard(card.id)" v-for="card in category.cards" :key="card.id" v-bind="card" />
                </div>
            </div>
        </div>

        <DetailCard v-if="cardActive" :card-id="currentActiveCardId" @close="cardActive = false" />
    </div>
</template>

<script>
import cards from '@/data/cards.json'
import categories from '@/data/categories.json'
import info from '@/data/info.json'
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import CategoryHeader from '@/components/CategoryHeader.vue'
import MoreInfo from '@/components/MoreInfo.vue'
import SortBar from '@/components/SortBar.vue'
import Fuse from 'fuse.js'
import DetailCard from '@/components/DetailCard.vue'

export default {
    name: 'Home',
    components: { Header, Card, CategoryHeader, MoreInfo, SortBar, DetailCard },
    data() {
        return {
            searchQuery: '',
            cardActive: false,
            currentActiveCardId: null
        }
    },
    computed: {
        info() {
            return info
        },
        hasSearch() {
            return this.searchQuery.length > 2
        },
        cardsSearchResult() {
            if (this.hasSearch) {
                return this.fuse.search(this.searchQuery).map(({ item }) => item)
            }

            return cards
        },
        cardsGrouped() {
            return categories.map(cat => ({
                ...cat,
                cards: this.cardsSearchResult.filter(card => card.category === cat.id)
            }))
        }
    },
    created() {
        this.fuse = new Fuse(cards, {
            keys: ['name', 'description']
        })
    },
    method: {
        activateCard(cardId) {
            this.currentActiveCardId = cardId
            this.cardActive = true
        }
    }
}
</script>

<style scoped>
.more-info-section {
    display: flex;
    justify-content: center;
    margin: 4rem auto;
    max-width: 70.625rem;
}

.cards {
    margin: 4rem auto;
    max-width: 72rem;
    margin-bottom: 0;
}

.category {
    padding-bottom: 5rem;
}

.category:first-of-type {
    margin-top: 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 17.5rem);
    justify-content: space-around;
    grid-gap: 1rem 0.2rem;
}
</style>
