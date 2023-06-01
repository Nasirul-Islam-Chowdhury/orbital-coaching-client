import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/router'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    </div>
  )
}

export default App
