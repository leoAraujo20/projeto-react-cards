import './Card.css';

interface CardProps {
  imageUrl: string;
  name: string;
  project: string;
}

interface CardProps {
    imageUrl: string;
    name: string;
    project: string;
    githubUrl?: string;
}

export default function Card({ imageUrl, name, project, githubUrl }: CardProps) {
    return (
        <div className="card">
            <img src={imageUrl} alt="Card Image" />
            <h2>{name}</h2>
            <p>{project}</p>
            {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    Conta do GitHub
                </a>
            )}
        </div>
    );
}
