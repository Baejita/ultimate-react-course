import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddfriend, setShowAddfriend] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState(null);

  function handleClickAddfriend() {
    setShowAddfriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddfriend(false);
  }

  function handleSelectFriend(friend) {
    // setSelectedFriends(friend);
    setSelectedFriends((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddfriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriends={selectedFriends}
          onSelected={handleSelectFriend}
        />

        {showAddfriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={(e) => handleClickAddfriend(e)}>
          {showAddfriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriends && <FormSplitBill selectedFriends={selectedFriends} />}
    </div>
  );
}

function FriendsList({ friends, onSelected, selectedFriends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriends={selectedFriends}
          onSelected={onSelected}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelected, selectedFriends }) {
  const isSelected = selectedFriends && selectedFriends?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You owe Clark {friend.balance}€</p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}€
        </p>
      )}

      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelected(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = { name, image: `${image}?=${id}`, balance: 0, id };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌆Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriends }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriends.name}</h2>
      <label>💰Bill Value</label>
      <input type="text" />

      <label>🧑Your expense</label>
      <input type="text" />

      <label>
        👬
        {selectedFriends.name}'s expense
      </label>
      <input type="text" disabled />

      <label>🤗 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriends.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
