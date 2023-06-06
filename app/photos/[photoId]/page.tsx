import Image from 'next/image';
import photos from '../../photos';

interface PhotoPageParams {
    params: {
        photoId: string;
    }
}

export async function generateStaticParams() {
    return photos.map((photo) => ({ photoId: photo.id }));
}

export default function PhotoPage({ params }: PhotoPageParams) {
    const { photoId } = params;
    const photo = photos.find((p) => p.id === photoId);

    if (photo) {
        return (
            <div className="container mx-auto my-10">
                <div className="w-1/2 mx-auto border border-gray-700">
                    <Image 
                        alt={`photo number ${photoId}`}
                        src={photo.imageSrc}
                        width={600}
                        height={600}
                        className="w-full object-cover aspect-square col-span-2"
                    />
                    <div className="bg-white p-4 px-6">
                        <h3>{photo.name}</h3>
                        <p>Taken by {photo.username}</p>
                    </div>
                </div>

            </div>
        );
    } else {
        return null;
    }
}