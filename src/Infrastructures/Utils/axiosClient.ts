import axios, { AxiosInstance } from 'axios'
import { API_BASE_URL, API_VERSION } from '../Constants'

/**
 * The AxiosClient class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class AxiosClient {
  private static axiosClientInstance: AxiosClient
  private axiosClient: AxiosInstance

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    this.axiosClient = axios.create({
      baseURL: API_VERSION !== '' ? `${API_BASE_URL}/${API_VERSION}` : API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    this.axiosClient.interceptors.response.use(
      (response: any) => {
        if (response.data) {
          return response.data
        }

        return response
      },
      (error: any) => {
        if (error.response.data) {
          // Handle error
        }

        return Promise.reject(error.response)
      },
    )

  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static get instance(): AxiosClient {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient()
    }

    return this.axiosClientInstance
  }

  public setToken(token: string): void {
    this.axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  public get = (url, options = {}): Promise<any> => this.axiosClient.get(url, { ...options })
  public post = (url, data, options = {}): Promise<any> => this.axiosClient.post(url, data, { ...options })
  public put = (url, data, options = {}): Promise<any> => this.axiosClient.put(url, data, { ...options })
  public patch = (url, data, options = {}): Promise<any> => this.axiosClient.patch(url, data, { ...options })
  public delete = (url, data, options = {}): Promise<any> => this.axiosClient.post(url, {
    ...data,
    _method: 'DELETE',
  }, { ...options })
}

export default AxiosClient.instance
