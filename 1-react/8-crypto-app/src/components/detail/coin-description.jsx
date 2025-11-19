const CoinDescription = ({ coin }) => {
  return (
    <div className="detail-container whitespace-pre-wrap text-gray-600 dark:text-gray-300">
      {coin.description?.en ? coin.description.en : "Açıklama bulunamadı"}
    </div>
  );
};

export default CoinDescription;
