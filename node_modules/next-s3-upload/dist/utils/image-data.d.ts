interface ImageData {
    height: number | undefined;
    width: number | undefined;
}
export declare const getImageData: (file: File | Blob) => Promise<ImageData>;
export {};
