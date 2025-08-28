import React, { useState, useMemo, useEffect } from "react";

// --- Iconos SVG para una mejor interfaz ---
const BuyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-green-500"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);
const SellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-red-500"
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);
const DeleteRowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-slate-500 hover:text-red-500 transition-colors duration-200"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);
const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-slate-400 hover:text-cyan-400 transition-colors"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);
const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);
const ArrowDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

// --- Componente Principal de la Aplicación ---
export default function App() {
  const initialTickers = [
    "NFLX",
    "NVDA",
    "MSFT",
    "AAPL",
    "GOOG",
    "AMZN",
    "META",
    "AVGO",
    "TSLA",
    "AMD",
    "QCOM",
    "MU",
    "MSTR",
    "COIN",
    "NVTS",
    "SPY",
    "DIA",
    "IWM",
    "QQQ",
    "SOXL",
    "TNA",
  ];

  const [transactions, setTransactions] = useState([]);
  const [tickerList, setTickerList] = useState(initialTickers);
  const [currentPrices, setCurrentPrices] = useState({});
  const [newTransaction, setNewTransaction] = useState({
    type: "buy",
    assetType: "opcion",
    ticker: tickerList[0],
    quantity: "",
    price: "",
  });
  const [error, setError] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [newTickerInput, setNewTickerInput] = useState("");

  useEffect(() => {
    if (!tickerList.includes(newTransaction.ticker)) {
      setNewTransaction((prev) => ({ ...prev, ticker: tickerList[0] || "" }));
    }
  }, [tickerList, newTransaction.ticker]);

  const portfolio = useMemo(() => {
    const positions = transactions.reduce((acc, tx) => {
      if (!acc[tx.ticker]) {
        acc[tx.ticker] = {
          totalItems: 0,
          totalCost: 0,
          realizedGain: 0,
          assetType: tx.assetType,
        };
      }
      const pos = acc[tx.ticker];
      const transactionValue =
        tx.assetType === "opcion"
          ? tx.quantity * tx.price * 100
          : tx.quantity * tx.price;

      if (tx.type === "buy") {
        pos.totalCost += transactionValue;
        pos.totalItems += tx.quantity;
      } else {
        const avgPrice =
          pos.totalItems > 0 ? pos.totalCost / pos.totalItems : 0;
        const saleValue =
          tx.assetType === "opcion"
            ? tx.quantity * tx.price * 100
            : tx.quantity * tx.price;
        pos.realizedGain += saleValue - tx.quantity * avgPrice;
        pos.totalCost -= tx.quantity * avgPrice;
        pos.totalItems -= tx.quantity;
      }
      return acc;
    }, {});

    Object.keys(positions).forEach((ticker) => {
      const pos = positions[ticker];
      pos.averagePrice =
        pos.totalItems > 0 ? pos.totalCost / pos.totalItems : 0;

      const currentPrice = currentPrices[ticker] || 0;
      if (currentPrice > 0 && pos.totalItems > 0) {
        const currentTotalValue =
          currentPrice *
          pos.totalItems *
          (pos.assetType === "opcion" ? 100 : 1);
        pos.unrealizedGain = currentTotalValue - pos.totalCost;
      } else {
        pos.unrealizedGain = 0;
      }
    });

    return positions;
  }, [transactions, currentPrices]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handlePriceChange = (ticker, price) => {
    setCurrentPrices((prev) => ({ ...prev, [ticker]: parseFloat(price) || 0 }));
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const quantity = parseFloat(newTransaction.quantity);
    const price = parseFloat(newTransaction.price);
    const currentPosition = portfolio[newTransaction.ticker] || {
      totalItems: 0,
    };

    if (!quantity || !price || quantity <= 0 || price <= 0) {
      setError("Por favor, introduce una cantidad y precio válidos.");
      return;
    }
    if (
      newTransaction.type === "sell" &&
      quantity > currentPosition.totalItems
    ) {
      setError(
        `No puedes vender más de ${currentPosition.totalItems.toFixed(
          2
        )} items de ${newTransaction.ticker}.`
      );
      return;
    }

    setTransactions([
      ...transactions,
      { ...newTransaction, quantity, price, id: Date.now() },
    ]);
    setNewTransaction({ ...newTransaction, quantity: "", price: "" });
    setError("");
  };

  const resetCalculator = () => setTransactions([]);
  const handleDeleteTransaction = (idToDelete) =>
    setTransactions(transactions.filter((tx) => tx.id !== idToDelete));

  const handleAddNewTicker = () => {
    const tickerToAdd = newTickerInput.trim().toUpperCase();
    if (tickerToAdd && !tickerList.includes(tickerToAdd)) {
      setTickerList([tickerToAdd, ...tickerList]);
      setNewTickerInput("");
    }
  };
  const handleDeleteTicker = (tickerToDelete) =>
    setTickerList(tickerList.filter((t) => t !== tickerToDelete));

  const handleMoveTicker = (index, direction) => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === tickerList.length - 1)
    )
      return;

    const newList = [...tickerList];
    const [item] = newList.splice(index, 1);
    const newIndex = direction === "up" ? index - 1 : index + 1;
    newList.splice(newIndex, 0, item);
    setTickerList(newList);
  };

  const formatCurrency = (value) =>
    value.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    });

  const openPositions = Object.keys(portfolio).filter(
    (t) => portfolio[t].totalItems > 0.00001
  );
  const closedPositions = Object.keys(portfolio).filter(
    (t) => portfolio[t].totalItems <= 0.00001 && portfolio[t].realizedGain !== 0
  );

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <header className="text-center mb-8 flex justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-cyan-400">
            Calculadora de Precio Medio Ponderado
          </h1>
          <button
            onClick={() => setIsSettingsOpen(true)}
            title="Gestionar Activos"
          >
            <SettingsIcon />
          </button>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <h2 className="text-2xl font-semibold mb-4 text-white border-b border-slate-600 pb-2">
                Resumen de Posiciones
              </h2>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {openPositions.length === 0 && closedPositions.length === 0 ? (
                  <p className="text-slate-500 text-center py-4">
                    No hay datos de posiciones.
                  </p>
                ) : (
                  <>
                    {openPositions.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-slate-300">
                          Posiciones Abiertas
                        </h3>
                        <div className="space-y-4 mt-2">
                          {openPositions.map((ticker) => {
                            const pos = portfolio[ticker];
                            return (
                              <div
                                key={ticker}
                                className="bg-slate-700/50 p-4 rounded-lg"
                              >
                                <h3 className="text-xl font-bold text-cyan-400">
                                  {ticker}
                                </h3>
                                <div className="text-sm space-y-1 mt-2">
                                  <div className="flex justify-between">
                                    <span>Items:</span>{" "}
                                    <span className="font-mono">
                                      {pos.totalItems.toFixed(2)}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Inversión:</span>{" "}
                                    <span className="font-mono">
                                      {formatCurrency(pos.totalCost)}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Costo Medio:</span>{" "}
                                    <span className="font-mono font-bold text-green-400">
                                      {formatCurrency(pos.averagePrice)}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between gap-2 mt-2">
                                    <label
                                      htmlFor={`price-${ticker}`}
                                      className="text-xs text-slate-400"
                                    >
                                      Precio Actual:
                                    </label>
                                    <input
                                      id={`price-${ticker}`}
                                      type="number"
                                      step="any"
                                      placeholder="0.00"
                                      value={currentPrices[ticker] || ""}
                                      onChange={(e) =>
                                        handlePriceChange(
                                          ticker,
                                          e.target.value
                                        )
                                      }
                                      className="bg-slate-800 border border-slate-600 rounded-md p-1 w-24 text-right font-mono text-sm focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                                    />
                                  </div>
                                  {pos.unrealizedGain !== 0 && (
                                    <div className="flex justify-between pt-1 border-t border-slate-600 mt-2">
                                      <span>G/P No Realizada:</span>{" "}
                                      <span
                                        className={`font-mono font-bold ${
                                          pos.unrealizedGain >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                        }`}
                                      >
                                        {formatCurrency(pos.unrealizedGain)}
                                      </span>
                                    </div>
                                  )}
                                  {pos.realizedGain !== 0 && (
                                    <div className="flex justify-between">
                                      <span>G/P Realizada:</span>{" "}
                                      <span
                                        className={`font-mono ${
                                          pos.realizedGain >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                        }`}
                                      >
                                        {formatCurrency(pos.realizedGain)}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    {closedPositions.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <h3 className="text-lg font-semibold text-slate-300">
                          Posiciones Cerradas
                        </h3>
                        <div className="space-y-2 mt-2">
                          {closedPositions.map((ticker) => {
                            const pos = portfolio[ticker];
                            return (
                              <div
                                key={ticker}
                                className="bg-slate-700/50 p-3 rounded-lg flex justify-between items-center"
                              >
                                <span className="font-bold text-cyan-400">
                                  {ticker}
                                </span>
                                <div className="text-sm text-right">
                                  <span className="text-slate-400 block">
                                    G/P Realizada:
                                  </span>
                                  <span
                                    className={`font-mono font-bold ${
                                      pos.realizedGain >= 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                    }`}
                                  >
                                    {formatCurrency(pos.realizedGain)}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Añadir Operación
              </h2>
              <form onSubmit={handleAddTransaction} className="space-y-4">
                <div>
                  <label className="block text-slate-400 mb-1">Activo</label>
                  <select
                    name="ticker"
                    value={newTransaction.ticker}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    {tickerList.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">
                    Tipo de Activo
                  </label>
                  <select
                    name="assetType"
                    value={newTransaction.assetType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    <option value="opcion">Contrato de Opciones</option>
                    <option value="accion">Acción</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">
                    Tipo de Operación
                  </label>
                  <select
                    name="type"
                    value={newTransaction.type}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    <option value="buy">Compra</option>
                    <option value="sell">Venta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Cantidad</label>
                  <input
                    type="number"
                    step="any"
                    name="quantity"
                    value={newTransaction.quantity}
                    onChange={handleInputChange}
                    placeholder="Ej: 10"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Precio</label>
                  <input
                    type="number"
                    step="any"
                    name="price"
                    value={newTransaction.price}
                    onChange={handleInputChange}
                    placeholder="Ej: 15.50"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 font-bold py-3 rounded-md transition-colors duration-300"
                >
                  Añadir Transacción
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Historial de Operaciones
              </h2>
              <button
                onClick={resetCalculator}
                className="flex items-center bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 text-sm"
              >
                <TrashIcon />
                Limpiar
              </button>
            </div>
            <div className="overflow-x-auto max-h-[calc(100vh-200px)]">
              <table className="w-full text-left">
                <thead className="border-b border-slate-600 sticky top-0 bg-slate-800">
                  <tr>
                    <th className="p-3 text-slate-400">Tipo</th>
                    <th className="p-3 text-slate-400">Activo</th>
                    <th className="p-3 text-slate-400">Clase</th>
                    <th className="p-3 text-slate-400 text-right">Cantidad</th>
                    <th className="p-3 text-slate-400 text-right">Precio</th>
                    <th className="p-3 text-slate-400 text-right">
                      Inversión Total
                    </th>
                    <th className="p-3 text-slate-400 text-center">Borrar</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length > 0 ? (
                    transactions.map((tx) => {
                      const totalValue =
                        tx.assetType === "opcion"
                          ? tx.quantity * tx.price * 100
                          : tx.quantity * tx.price;
                      return (
                        <tr
                          key={tx.id}
                          className="border-b border-slate-700 hover:bg-slate-700/50"
                        >
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <span
                                className={`font-bold ${
                                  tx.type === "buy"
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                              >
                                {tx.type === "buy" ? "Compra" : "Venta"}
                              </span>
                            </div>
                          </td>
                          <td className="p-3 font-bold text-cyan-400">
                            {tx.ticker}
                          </td>
                          <td className="p-3 text-slate-300 capitalize">
                            {tx.assetType === "opcion" ? "Opción" : "Acción"}
                          </td>
                          <td className="p-3 text-right font-mono">
                            {tx.quantity}
                          </td>
                          <td className="p-3 text-right font-mono">
                            {formatCurrency(tx.price)}
                          </td>
                          <td className="p-3 text-right font-mono">
                            {formatCurrency(totalValue)}
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleDeleteTransaction(tx.id)}
                              title="Eliminar"
                              className="p-1"
                            >
                              <DeleteRowIcon />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="text-center p-8 text-slate-500"
                      >
                        No hay operaciones registradas.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {isSettingsOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-md border border-slate-700">
              <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  Gestionar Activos
                </h3>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-slate-500 hover:text-white text-3xl leading-none"
                >
                  &times;
                </button>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newTickerInput}
                    onChange={(e) => setNewTickerInput(e.target.value)}
                    placeholder="Añadir nuevo (ej. SPX)"
                    className="flex-grow bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                  <button
                    onClick={handleAddNewTicker}
                    className="bg-cyan-600 hover:bg-cyan-500 font-bold py-2 px-4 rounded-md"
                  >
                    Añadir
                  </button>
                </div>
                <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
                  {tickerList.map((ticker, index) => (
                    <div
                      key={ticker}
                      className="flex justify-between items-center bg-slate-700 p-2 rounded-md"
                    >
                      <span className="font-mono text-white">{ticker}</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleMoveTicker(index, "up")}
                          disabled={index === 0}
                          className="disabled:opacity-20"
                        >
                          <ArrowUpIcon />
                        </button>
                        <button
                          onClick={() => handleMoveTicker(index, "down")}
                          disabled={index === tickerList.length - 1}
                          className="disabled:opacity-20"
                        >
                          <ArrowDownIcon />
                        </button>
                        <button
                          onClick={() => handleDeleteTicker(ticker)}
                          className="text-red-500 hover:text-red-400 font-bold text-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-b-xl text-right">
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-6 rounded-md"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
