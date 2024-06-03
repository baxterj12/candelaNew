import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  return products.map(product => ({
    shortName: product.shortName,
  }));
}

export default function Preorder({ params }) {

  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  const product = products.find(product => product.shortName === params.shortName);
  return (
    <div>
      <p>{product.desc}</p>
    </div>
  );
}