import React from "react";

class ClassComponent extends React.Component {
  // PROP'LARA ERİŞTİĞİMİZ FONKSİYON
  constructor(props) {
    super(props);

    // STATE OLUŞTURMA
    this.state = {
      count: 0,
      theme: "dark",
    };
  }

  // component ekrana gelince çalışır
  // örn: kullanıcnın sayfaya girdiği anda api'dan verileri çekip listelemek istiyorsa bunu componentDidMount anında yaparız
  componentDidMount() {
    console.log("componentDidMount çalıştı");
  }

  // component güncellendiği anda (state/prop değişimi) çalışır
  // örn: kullanıcı pagination üzerinden sayfa state'ini her güncellediğinde güncel sayfanın verilierini api'dan almak için kullanılabilir
  componentDidUpdate() {
    console.log("componentDidUpdate çalıştı", this.state.count);
  }

  // component ekrandan ayrılmadan hemen önce çalışır
  // örn: genellikle temizlik (timer iptali, abonelik durdurma) için kullanılır.
  componentWillUnmount() {
    console.log("componentWillUnmount çalıştı");
  }

  // JSX İÇERİĞİNİN DÖNDÜRÜLDÜĞÜ FONKSİYON
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>

        <span>{this.state.count}</span>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
