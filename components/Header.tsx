import HeroReel from '@/components/HeroReel';

export default function Header({ data }: any) {
  return (
    <div className="header">
      <HeroReel data={data} />
    </div>
  );
}
