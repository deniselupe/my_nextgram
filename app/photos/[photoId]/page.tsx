import Frame from '../../../components/frame';
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
                    <Frame photo={photo} />
                </div>
            </div>
        );
    } else {
        return null;
    }
}