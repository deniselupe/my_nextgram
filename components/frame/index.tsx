import Image from 'next/image';
import { PhotoType } from '../../app/photos';

interface FrameProps {
    photo: PhotoType;
}

export default function Frame({ photo }: FrameProps) {
    return (
        <>
            <Image 
                alt={`photo number ${photo.id}`}
                src={photo.imageSrc}
                width={600}
                height={600}
                className="w-full object-cover aspect-square col-span-2"
            />
            <div className="bg-white p-4 px-6">
                <h3>{photo.name}</h3>
                <p>Taken by {photo.username}</p>
            </div>
        </>
    );
}