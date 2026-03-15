import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
    return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.2 }}
                id='experience'
            >
                <div className='container mx-auto px-6'>
                    <h2>Work <span>Expereince</span></h2>
                </div>

            </motion.div>
        
    )
}

export default Work