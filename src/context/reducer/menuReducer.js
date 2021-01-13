import { AreaChartOutlined } from '@ant-design/icons'
import uuid from 'short-uuid'

export const initialState = {
   menu: {
      items: [
         {
            title: 'AGENCIA VIRTUAL',
            icon: <AreaChartOutlined />,
            subItems: [
               { id: uuid.generate(), title: 'TRÁMITES', src: 'https://app.powerbi.com/reportEmbed?reportId=dc4783d4-3825-4c4d-a598-29a1b5830d5d&autoAuth=true&ctid=01ce8357-a75e-455e-8c4c-faaaa6dbd8fe&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9' }
            ]
         },
         {
            title: 'MESA VIRTUAL',
            icon: <AreaChartOutlined />,
            subItems: [
               { id: uuid.generate(), title: 'SOLICITUDES NACIONALIDAD', src: 'https://app.powerbi.com/reportEmbed?reportId=dc4783d4-3825-4c4d-a598-29a1b5830d5d&autoAuth=true&ctid=01ce8357-a75e-455e-8c4c-faaaa6dbd8fe&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9' }
            ]
         },
      ],
      loading: false,
      error: null
   }
}

export default function menuReducer(state = [], { action, payload }) {
   switch (action) {
      default:
         return state
   }
}