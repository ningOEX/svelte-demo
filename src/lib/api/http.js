// const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

export async function request(endpoint, options = {}) {
  const url = `${endpoint}`
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

// 常用方法快捷封装
export const get = (endpoint, params) => {
  const query = params ? `?${new URLSearchParams(params)}` : ''
  return request(`${endpoint}${query}`, { method: 'GET' })
}

export const post = (endpoint, data) => {
  return request(endpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export const put = (endpoint, data) => {
  return request(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

export const del = (endpoint) => {
  return request(endpoint, { method: 'DELETE' })
}