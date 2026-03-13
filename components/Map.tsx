import React from 'react'

const Map = () => {
    return (
        <div className='w-full max-w-[500px] aspect-square'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d151.207!3d-33.875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f3f3f3f3f%3A0x0!2s99+Bathurst+St%2C+Sydney+NSW+2000!5e0!3m2!1sen!2sau!4v1"
                className='w-full h-full rounded-lg'
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Edge Ark Office - 1404/99 Bathurst Street, Sydney"
            />
        </div>
    )
}

export default Map