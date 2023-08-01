<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">
            <div class="special-font px-6" v-bind="props" variant="flat" :color="isHovering ? 'primary' : ''">
                <slot/>
            </div>
        </template>
    </v-hover>
</template>
