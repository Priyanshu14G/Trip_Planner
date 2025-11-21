import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='mt-24 w-full flex justify-center'>
      <div className='max-w-5xl w-full text-center space-y-6'>
        <h1 className='text-5xl md:text-5xl font-bold'>Hey, I'm your personal <span className='text-primary'>Trip Planner</span></h1>
        <p className='text-lg'>Tell me what you want, and I'll handle the rest: Flights, Hotels, trip planner - all in seconds</p>
        <div>
            <div className='border rounded-2xl p-4 relative'>
                <Textarea placeholder='Create a trip for Parise from New York'
                className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'
                />
                <Button size={'icon'} className='absolute bottom-6 right-6'>
                    <Send className='h-4 w-4'/>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
