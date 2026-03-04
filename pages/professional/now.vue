<template>
	<section class="py-16 md:py-24">
		<div class="container mx-auto px-4">
			<div class="max-w-3xl mx-auto">
				<div
					v-for="entry in journalEntries"
					:key="entry.date"
					class="mb-16">
					<h1 class="text-4xl font-bold mb-8">{{ entry.title }}</h1>
					<p class="text-lg italic text-muted mb-8">
						Last updated: {{ formatDate(entry.date) }}
					</p>

					<p class="text-lg mb-6">Here's what I'm focused on right now.</p>

					<div
						v-for="section in entry.sections"
						:key="section.heading"
						class="prose max-w-none">
						<h2 class="text-2xl font-bold mt-12 mb-6">{{ section.heading }}</h2>
						<div class="mb-6">
							<p
								v-for="(item, index) in section.content"
								:key="index"
								:class="{ 'line-through text-gray-500': item.isOld }">
								{{ item.text }}
                <span class="text-sm text-muted">--{{ formatDate(item.date) }}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { nowEntries as journalEntries } from '~/server/data/now';

	function formatDate(date) {
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}).format(new Date(date));
	}
</script>
