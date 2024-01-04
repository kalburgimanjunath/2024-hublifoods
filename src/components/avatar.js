export default function Avatar({ url = `https://i.pravatar.cc/300` }) {
  return (
    <div>
      <img
        src={url}
        width={120}
        className="rounded-full border-4 border-orange-600"
      />
    </div>
  );
}
