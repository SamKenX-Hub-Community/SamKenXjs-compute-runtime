/**
 * @experimental
 */
declare module "fastly:experimental" {
  /**
   * @experimental
   */
  export function setBaseURL(base: URL | null | undefined): void;
  /**
   * @experimental
   */
  export function setDefaultBackend(backend: string): void;
  /**
   * Causes the Compute@Edge JS runtime environment to log debug information to stdout.
   *
   * **Note**: This is mostly for internal debugging purposes and will generate highly unstable
   * output.
   * @experimental
   */
  export function enableDebugLogging(enabled: boolean): void;

  /**
   * Embed a file as a Uint8Array.
   *
   * @param path - The path to include, relative to the project's top-level directory
   *
   * **Note**: Can only be used during build-time initialization, not when processing requests.
   * @experimental
   */
  export function includeBytes(path: string): Uint8Array;

  /**
   * Whether or not to allow Dynamic Backends.
   * 
   * By default, Dynamic Backends are disabled within a JavaScript application as it can be a potential 
   * avenue for third-party JavaScript code to send requests, potentially including sensitive/secret data, 
   * off to destinations that the JavaScript project was not intending, which could be a security issue.
   *
   * @experimental
   */
  export function allowDynamicBackends(enabled: boolean): void;
}
