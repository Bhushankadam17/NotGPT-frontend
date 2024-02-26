import React from 'react'

const Username = () => {
  return (
    <div className='flex w-full items-center'>
        <div className='grow'>
            <div className='group relative'>
                <button className='flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-token-sidebar-surface-secondary  group-ui-open:bg-token-sidebar-surface-secondary'>
                    <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center overflow-hidden rounded-full'>
                            <div className='relative flex'>
                            <img alt="User" loading="lazy" width="32" height="32" decoding="async" className="rounded-sm" src="https://lh3.googleusercontent.com/a/AEdFTp5od__IW28EpVDfR_QQ9LSLij0aed8V_deNDf6a8g=s96-c" style={{color: 'transparent'}}/>
                            </div>
                        </div>
                    </div>
                    <div className='relative -top-px grow -space-y-px overflow-hidden text-ellipsis whitespace-nowrap text-left text-token-text-primary'>
                    <div>Bhushan Kadam</div>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Username