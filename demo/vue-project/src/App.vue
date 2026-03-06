<script setup lang="ts">
import normalizeColor from 'normalize-colors';

const tests = [
    {type: 'name', name: 'HEX'},
    {type: 'HEX', input: '#F00'},
    {type: 'HEX', input: '#f00'},
    {type: 'HEX', input: '#FF0000'},
    {type: 'HEX', input: '#ff0000'},
    {type: 'name', name: 'RGB / RGBA'},
    {type: 'RGB', input: 'rgb(255 0 0)'},
    {type: 'RGB', input: 'rgb(255, 0, 0)'},
    {type: 'RGBA', input: 'rgba(255, 0, 0, 0.5)'},
    {type: 'name', name: 'HSL / HSLA'},
    {type: 'HSL', input: 'hsl(120 100% 50%)'},
    {type: 'HSL', input: 'hsl(120, 100%, 50%)'},
    {type: 'HSLA', input: 'hsla(120, 100%, 50%, 0.5)'},
    {type: 'name', name: 'HWB'},
    {type: 'HWB', input: 'hwb(120 50% 0%)'},
    {type: 'HWB', input: 'hwb(120, 50%, 0%)'},
    {type: 'name', name: 'LAB (CIE L*a*b*)'},
    {type: 'LAB', input: 'lab(50 10 -5)'},
    {type: 'LAB', input: 'lab(50% 0 0)'},
    {type: 'name', name: 'LCH (CIE LCH)'},
    {type: 'LCH', input: 'lch(50% 20 180)'},
    {type: 'LCH', input: 'lch(50, 20, 180)'},
    {type: 'name', name: 'OKLAB'},
    {type: 'OKLAB', input: 'oklab(0.6 0.1 -0.05)'},
    {type: 'OKLAB', input: 'oklab(60% 0.1 -0.05)'},
    {type: 'name', name: 'OKLCH'},
    {type: 'OKLCH', input: 'oklch(0.6 0.2 180)'},
    {type: 'OKLCH', input: 'oklch(60% 0.2 180)'},
    {type: 'name', name: 'CSS color() function'},
    {type: 'color()', input: 'color(srgb 0.5 0 0)'},
    {type: 'color()', input: 'color(srgb-linear 0.215 0 0)'},
    {type: 'color()', input: 'color(display-p3 0.24 0.52 0.48)'},
    {type: 'color()', input: 'color(a98-rgb 0.44 0.5 0.37)'},
    {type: 'color()', input: 'color(prophoto-rgb 0.28 0.4 0.42)'},
    {type: 'color()', input: 'color(rec2020 0.42 0.48 0.36)'},
    {type: 'color()', input: 'color(xyz 0.2 0.15 0.6)'},
    {type: 'color()', input: 'color(xyz-d50 0.2 0.14 0.45)'},
    {type: 'color()', input: 'color(xyz-d65 0.22 0.15 0.59)'}
];
</script>

<template>
    <main class="App-main">
        <table>
            <thead>
            <tr>
                <th>Example</th>
                <th>Result</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in tests" :key={index}>
                <th v-if="item.type === 'name'">{{ item.name }}</th>
                <th v-else>{{ item.input }}</th>
                <th v-if="item.type === 'name'"></th>
                <th v-else :style="{color: normalizeColor(item.input)}">{{ normalizeColor(item.input) }}</th>
            </tr>
            </tbody>
        </table>
    </main>
</template>

<style scoped>
.App-main {
    background-color: #282c34;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #FFFFFF;
}

.App-main table {
    padding-top: 50px;
    padding-bottom: 50px;
}

.App-main th,
.App-main th * {
    font-weight: 700;
    text-align: left;
}

.App-main th,
.App-main td {
    padding: 2px 15px;
}

.App-main th {
    padding-top: 25px;
    padding-bottom: 10px;
}
</style>
