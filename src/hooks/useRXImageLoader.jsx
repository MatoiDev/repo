import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const useRXImageLoader = (imageUrl) => {

    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const subscription = Observable.create((observer) => {
            const img = new Image();

            img.onload = () => {
                observer.next(img);
                observer.complete();
            };

            img.onerror = (err) => {
                observer.error(err);
            };

            img.src = imageUrl;
        })
            .pipe(map((img) => img.src))
            .subscribe(
                (src) => {
                    setImage(src);
                    setIsLoading(false);
                },
                (err) => {
                    setError(err);
                    setIsLoading(false);
                }
            );

        return () => {
            subscription.unsubscribe();
        };
    }, [imageUrl]);

    return { image, isLoading, error };
};

export default useRXImageLoader;
