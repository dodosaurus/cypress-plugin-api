declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Make an HTTP GET request. Command works the same way as cy.request()
       *
       * @see https://on.cypress.io/request
       * @example
       *    cy.api('http://dev.local/seed')
       */
      api<T = any>(url: string, body?: RequestBody): Chainable<Response<T>>
      /**
       * Make an HTTP request with specific method. Command works the same way as cy.request()
       *
       * @see https://on.cypress.io/request
       * @example
       *    cy.api('POST', 'http://localhost:8888/users', {name: 'Jane'})
       */
      api<T = any>(method: HttpMethod, url: string, body?: RequestBody): Chainable<Response<T>>
      /**
       * Make an HTTP request with specific behavior. Command works the same way as cy.request()
       *
       * @see https://on.cypress.io/request
       * @example
       *    cy.api({
       *      url: '/dashboard',
       *      followRedirect: false // turn off following redirects
       *    })
       */
      api<T = any>(options: Partial<RequestOptions>): Chainable<Response<T>>
    }
  }
  interface Window {
    props: Record<string, any>
  }
}

export interface apiRequestOptions extends Cypress.RequestOptions {
  headers: Record<string, any>
  auth: Record<string, any>
}

export interface requestProps {
  method: string
  status: string
  url: string
  query: Record<string, any>
  queryFormatted: string
  auth: Record<string, any>
  authFormatted: string
  requestHeaders: Record<string, any>
  requestHeadersFormatted: string
  requestBody: Cypress.RequestBody
  requestBodyFormatted: string
  responseBody: Record<string, any>
  responseBodyFormatted: string
}