// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Vault object management, content access, and document operations
 */
export class Assemblies extends APIResource {
  /**
   * Starts an asynchronous, deterministic PDF assembly. The manifest selects page
   * ranges from source PDFs in output order, adds an outline, an optional linked
   * contents page and optional Bates numbering, and splits the result into volumes.
   * Optional compression downsamples oversized scans. Each volume becomes a new
   * vault object. Source bookmarks, form fields and page labels are not carried
   * over. Outputs are not indexed automatically. Completion is reported through
   * vault.assembly webhooks.
   *
   * @example
   * ```ts
   * const assembly = await client.vault.assemblies.create(
   *   'id',
   *   {
   *     sources: [{ objectId: 'objectId' }],
   *     volumes: [
   *       {
   *         filename: 'filename',
   *         pages: [
   *           {
   *             end: 1,
   *             source: 0,
   *             start: 1,
   *           },
   *         ],
   *       },
   *     ],
   *     'Idempotency-Key': 'x',
   *   },
   * );
   * ```
   */
  create(
    id: string,
    params: AssemblyCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssemblyCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(path`/vault/${id}/assemblies`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Returns the status of a PDF assembly. Completed volumes include their page
   * count, size, SHA-256 and Bates range.
   *
   * @example
   * ```ts
   * const assembly = await client.vault.assemblies.retrieve(
   *   'assemblyId',
   *   { id: 'id' },
   * );
   * ```
   */
  retrieve(
    assemblyID: string,
    params: AssemblyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AssemblyRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/vault/${id}/assemblies/${assemblyID}`, options);
  }
}

export interface AssemblyCreateResponse {
  id?: string;

  clientReference?: string;

  status?: 'queued' | 'processing' | 'completed' | 'failed';

  volumes?: Array<AssemblyCreateResponse.Volume>;
}

export namespace AssemblyCreateResponse {
  export interface Volume {
    filename?: string;

    objectId?: string;
  }
}

export interface AssemblyRetrieveResponse {
  id?: string;

  clientReference?: string;

  /**
   * What the assembly cost Case.dev, once it is completed or failed. Internal COGS,
   * not a price.
   */
  cogs?: AssemblyRetrieveResponse.Cogs;

  error?: AssemblyRetrieveResponse.Error;

  status?: 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled';

  timings?: AssemblyRetrieveResponse.Timings;

  vaultId?: string;

  volumes?: Array<AssemblyRetrieveResponse.Volume>;
}

export namespace AssemblyRetrieveResponse {
  /**
   * What the assembly cost Case.dev, once it is completed or failed. Internal COGS,
   * not a price.
   */
  export interface Cogs {
    computeMicros?: number;

    cpu?: number;

    memoryMib?: number;

    outputBytes?: number;

    rateVersion?: string;

    sourceBytes?: number;

    transferMicros?: number;

    workerSeconds?: number;
  }

  export interface Error {
    code?: string;

    message?: string;

    retryable?: boolean;

    sourceIndex?: number;

    stage?: string;

    volumeIndex?: number;
  }

  export interface Timings {
    acceptedAt?: string;

    completedAt?: string;

    workerElapsedMs?: number;

    workerStartedAt?: string;
  }

  export interface Volume {
    batesEnd?: string | null;

    batesStart?: string | null;

    filename?: string;

    objectId?: string;

    pageCount?: number;

    sha256?: string;

    sizeBytes?: number;
  }
}

export interface AssemblyCreateParams {
  /**
   * Body param: Source PDFs, or ingested office files (spreadsheets, CSV/TSV, Word),
   * which are assembled from the PDF version ingestion saved for them. A source can
   * also be a PDF you made, such as a cover or notice letter, sent inline. Page
   * ranges refer to a source by its index in this list.
   */
  sources: Array<AssemblyCreateParams.UnionMember0 | AssemblyCreateParams.Pdf>;

  /**
   * Body param
   */
  volumes: Array<AssemblyCreateParams.Volume>;

  /**
   * Header param: Stable key for safely retrying the same assembly request
   */
  'Idempotency-Key': string;

  /**
   * Body param: Bates numbering that continues across every volume without its own
   * series. Text must be printable ASCII.
   */
  bates?: AssemblyCreateParams.Bates;

  /**
   * Body param
   */
  clientReference?: string;

  /**
   * Body param: Downsamples colour and grayscale scans above maxDpi and re-encodes
   * them. Images already stored as 1-bit, JPEG 2000, indexed or CMYK keep their
   * bytes.
   */
  compression?: AssemblyCreateParams.Compression;

  /**
   * Body param: Optimize volumes for web viewing
   */
  linearize?: boolean;

  /**
   * Body param: Put every page upright on a US Letter sheet: portrait pages on a
   * portrait sheet, landscape pages on a landscape sheet, other sizes scaled to fit
   */
  pageSize?: 'letter';
}

export namespace AssemblyCreateParams {
  export interface UnionMember0 {
    objectId: string;

    rendition?: 'searchable_pdf' | 'original';
  }

  export interface Pdf {
    /**
     * A base64 PDF of up to 10 pages and 1 MB, assembled as given. Up to 10 per
     * request.
     */
    pdf: string;
  }

  export interface Volume {
    /**
     * Output filename, ending in .pdf
     */
    filename: string;

    /**
     * Page ranges in output order. Pages are 1-based and inclusive; repeats are
     * allowed.
     */
    pages: Array<Volume.Page>;

    /**
     * This volume’s own Bates series, numbered from its own start. Same fields as the
     * top-level bates.
     */
    bates?: Volume.Bates;

    /**
     * Adds linked contents pages at the front of the volume, built from its outline.
     * Outline pages stay numbered within the manifest pages.
     */
    contents?: Volume.Contents;

    /**
     * Bookmarks, up to 8 levels deep
     */
    outline?: Array<Volume.Outline>;

    /**
     * PDF document title
     */
    title?: string;
  }

  export namespace Volume {
    export interface Page {
      end: number;

      source: number;

      start: number;

      /**
       * false leaves these pages unstamped; they use up no Bates number
       */
      bates?: boolean;
    }

    /**
     * This volume’s own Bates series, numbered from its own start. Same fields as the
     * top-level bates.
     */
    export interface Bates {
      fontSize?: number;

      legend?: string;

      /**
       * Points from the bottom edge to the label
       */
      marginBottom?: number;

      /**
       * Points from the side edge to the label
       */
      marginSide?: number;

      padTo?: number;

      position?: 'bottom_right' | 'bottom_center' | 'bottom_left';

      prefix?: string;

      /**
       * Shrinks each stamped page slightly so the label sits in a clear strip below its
       * content
       */
      shrink?: boolean;

      start?: number;

      suffix?: string;
    }

    /**
     * Adds linked contents pages at the front of the volume, built from its outline.
     * Outline pages stay numbered within the manifest pages.
     */
    export interface Contents {
      /**
       * Outline levels listed
       */
      depth?: 1 | 2;

      title?: string;
    }

    export interface Outline {
      /**
       * 1-based page within this volume
       */
      page: number;

      title: string;

      /**
       * Nested entries, same shape
       */
      children?: Array<unknown>;
    }
  }

  /**
   * Bates numbering that continues across every volume without its own series. Text
   * must be printable ASCII.
   */
  export interface Bates {
    fontSize?: number;

    /**
     * Line printed above each label
     */
    legend?: string;

    /**
     * Points from the bottom edge to the label
     */
    marginBottom?: number;

    /**
     * Points from the side edge to the label
     */
    marginSide?: number;

    padTo?: number;

    position?: 'bottom_right' | 'bottom_center' | 'bottom_left';

    prefix?: string;

    /**
     * Shrinks each stamped page slightly so the label sits in a clear strip below its
     * content instead of over existing footer text
     */
    shrink?: boolean;

    start?: number;

    suffix?: string;
  }

  /**
   * Downsamples colour and grayscale scans above maxDpi and re-encodes them. Images
   * already stored as 1-bit, JPEG 2000, indexed or CMYK keep their bytes.
   */
  export interface Compression {
    /**
     * Store pages that are only ink on paper as 1-bit images
     */
    bitonal?: boolean;

    /**
     * Clean up scanned document pages: 300 dpi, white paper, dark ink. Photos and
     * imaging keep their tones; gray stays gray and colour stays colour
     */
    cleanScans?: boolean;

    /**
     * JPEG 2000 is smaller; JPEG is faster
     */
    encoding?: 'jpeg2000' | 'jpeg';

    maxDpi?: number;

    quality?: 'high' | 'standard' | 'small';
  }
}

export interface AssemblyRetrieveParams {
  /**
   * Vault ID
   */
  id: string;
}

export declare namespace Assemblies {
  export {
    type AssemblyCreateResponse as AssemblyCreateResponse,
    type AssemblyRetrieveResponse as AssemblyRetrieveResponse,
    type AssemblyCreateParams as AssemblyCreateParams,
    type AssemblyRetrieveParams as AssemblyRetrieveParams,
  };
}
