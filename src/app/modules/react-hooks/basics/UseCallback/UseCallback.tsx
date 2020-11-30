import React from 'react';

interface ItemsListProps {
  getItems(num: number): string[];
}

const ItemsList: React.FC<ItemsListProps> = ({ getItems }) => {
  const [items, setItems] = React.useState<string[]>([]);

  React.useEffect(() => {
    const newItems = getItems(42);

    setItems(newItems);

    console.log('Render ItemsList');
  }, [getItems]);

  return (
    <ul>
      { items.map(i => <li key={i}>{i}</li>) }
    </ul>
  );
};

export const UseCallback: React.FC = () => {
  const [colored, setColored] = React.useState(false);
  const [count, setCount] = React.useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black',
  };

  const generateItemsFromAPI = React.useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};
