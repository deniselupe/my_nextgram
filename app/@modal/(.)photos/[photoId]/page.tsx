'use client';

import { useRouter } from 'next/navigation';

interface PhotoDetailModalProps {
    params: {
        photoId: string;
    }
}

export default function PhotoDetailModal({ params }: PhotoDetailModalProps) {
    const router = useRouter();
    const { photoId } = params;

    const handleBack = () => {
        router.back();
    };

    return <div onClick={handleBack} className="mx-auto fixed left-0 right-0 top-0 bottom-0 bg-black/60"/>;
}