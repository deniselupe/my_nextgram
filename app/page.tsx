import Link from 'next/link';
import Image from 'next/image';
import photos from './photos';

export default function HomePage() {
  return (
    <main className="border-solid border-2 border-white container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-6 m-10">
        {
          photos.map((photo) => {
            return (
              <Link key={photo.id} href={`/photos/${photo.id}`}>
                <Image 
                  alt=""
                  src={photo.imageSrc}
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover"
                />
              </Link>
            )
          })
        }
      </div>
    </main>
  );
}