import React from 'react'

export default class Scroll {
    goTo(id){
        window.scrollTo({top:id.current.offsetTop,behaviour:'smooth'})
    }
}