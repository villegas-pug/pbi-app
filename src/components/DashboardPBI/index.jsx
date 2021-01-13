import React from 'react'

const style = {
   container: {
      frameborder: 0,
      allowFullScreen: true,
      height: '99vh',
      width: '88vw'
   }
}

export default function DashboardPBI({ src }) {
   return (
      <iframe
         style={style.container}
         src={src}
         width='100%'
      />
   )
}