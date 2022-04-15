export default {
	name: 'menu',
	title: 'Menu',
	type: 'document',
	fields: [
		{ name: 'title', title: 'Title', type: 'string' },
		{ name: 'description', title: 'Description', type: 'string' },
		{ name: 'imgUrl', title: 'ImgUrl', type: 'image', options: { hotspot: true } },
		{ name: 'tags', title: 'Tags', type: 'array', of: [ { name: 'tags', title: 'Tags', type: 'string' } ] }
	]
}
