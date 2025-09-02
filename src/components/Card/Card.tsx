import './Card.css';

interface CardProps {
  imageUrl: string;
  name: string;
  project: string;
}

export default function Card({ imageUrl, name, project }: CardProps) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" />
      <h2>{name}</h2>
      <p>{project}</p>
    </div>
  );
}
