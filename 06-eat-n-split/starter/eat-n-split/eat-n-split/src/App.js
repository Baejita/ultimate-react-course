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

  function handleSplitBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map(
        (friend) =>
          friend.id === selectedFriends.id
            ? { ...friend, balance: friend.balance + value }
            : friend //สร้างเงื่อนไขเพื่อนำ balance ที่ำคำนวณไปเพิ่มใน setFriends
      )
    );

    setSelectedFriends(null); //เมื่อกดฟังชั่น handleSpitBill จะทำให้หน้าต่าง setSeleted... ปิด
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
      {selectedFriends && (
        <FormSplitBill
          selectedFriends={selectedFriends}
          onSplitBill={handleSplitBill}
        />
      )}
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

function FormSplitBill({ selectedFriends, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriends.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧑Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>
        👬
        {selectedFriends.name}'s expense
      </label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤗 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriends.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
