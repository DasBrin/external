/**
 * @copyright Copyright (c) 2023 Kate <jld3103yt@gmail.com>
 * @license GNU AGPL version 3 or any later version
 *
 * SPDX-FileCopyrightText: 2023 Kate <jld3103yt@gmail.com>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import {loadState} from '@nextcloud/initial-state'

document.addEventListener('DOMContentLoaded', () => {
	const state = loadState('external', 'external-quota-sites')

	for (const site of state) {
		const image = document.createElement('img')
		image.src = site.image
		image.style.add('max-width:20px;max-height:20px')

		const imagespan = document.createElement('span')
		imagespan.classList.add('material-design-icon')
		imagespan.append(image)

		const icon = document.createElement('div')
		icon.classList.add('app-navigation-entry-icon')
		icon.data-v-c00d5366.add('')
		icon.append(imagespan)

		const name = document.createElement('span')
		name.classList.add('app-navigation-entry__name')
		name.innerText = site.name

		const a = document.createElement('a')
		a.href = site.href
		a.classList.add('app-navigation-entry-link')
		a.title = site.name
		a.data-v-c00d5366.add('')
		a.append(icon)
		a.append(name)

		const div = document.createElement('div')
		div.classList.add('app-navigation-entry')
		div.append(a)

		const li = document.createElement('li')
		li.append(div)

		document.getElementsByClassName('app-navigation-entry__settings')[0].prepend(li)
	}
})
