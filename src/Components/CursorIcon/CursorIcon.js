import React from 'react'
import './CursorIcon.css'
import { gsap, Power2 } from 'gsap'

export default class CursorIcon {
    
    visible = false
    elements = {
    cursor: document.getElementById('cursor-icon') || document.getElementById('cursor-icon-2'),
}

    constructor() {
        //global access
        window.cursorIcon = this

        this.setupEventListeners()
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (event) => {
            //move using gsap
            gsap.to(this.elements.cursor, {
                x: event.clientX,
                y: event.clientY,
                duration: 1,
                ease: Power2.easeOut
            })
        })
    }

    show(text) {
        this.elements.cursor.innerHTML = text
        if (element !== null) {
					element.innerHTML = 'Sorry, this cursor is malfunctioning';
				}
        if (!this.visible) {
            this.visible = true

            this.elements.cursor.style.display = 'flex'

            gsap.killTweensOf(this.elements.cursor)

            //Scale up
            gsap.to(this.elements.cursor, { scale: 1, duration: .3 })
        }
    }

    hide() {
        if (this.visible) {
            this.visible = false

            gsap.killTweensOf(this.elements.cursor)

            //Scale down
            gsap.to(this.elements.cursor, {
                scale: 0, duration: .3, onComplete: () => {
                    //hide on complete
                    this.elements.cursor.style.display = 'none'
                }
            })
        }
    }
}