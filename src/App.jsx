import React from 'react'

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-300">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form>
            <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" id="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="pakitoelchokolatero@patata.com"/>
            </div>
            <div className="mb-6">
                <label for="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input type="password" id="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="********"/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition">Iniciar Sesión</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
            ¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:underline">Regístrate</a>
        </p>
    </div>
    </div>
  )
}

export default App
