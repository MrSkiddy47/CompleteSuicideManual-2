Amidakuji "阿弥陀籤" (Chân ma) 

Lời giải thích lấy từ [đây](https://codegolf.stackexchange.com/questions/173536/amidakuji-阿弥陀籤-simplification).

Nếu bạn đã từng tiếp xúc với văn hóa Nhật Bản hoặc Đông Á, chắc chắn bạn đã từng gặp trò chơi Amidakuji:

![](/amidakuji1.jpg)

Theo [Wikipedia](https://vi.wikipedia.org/wiki/Chân_ma), đây là một loại xổ số được vẽ trên giấy và được sử dụng để chọn ngẫu nhiên một hoán vị gồm N phần tử.

Ví dụ: nó có thể được sử dụng để chỉ định ngẫu nhiên một chuỗi bắt đầu cho N người, hoặc N phần thưởng cho N người, v.v.

Bí quyết để hiểu tại sao trò chơi này đại diện cho một hoán vị là nhận ra rằng mỗi nét ngang (gọi là "chân") sẽ hoán đổi hai phần tử của nó tại chỗ.

Trang Wikipedia đó cũng giải thích rằng mỗi hoán vị P của N phần tử tương ứng với vô số sơ đồ Amidakuji. Phần tử có số nét ngang (chân) ít nhất được gọi là "số nguyên tố" của hoán vị P đó.

Nhiệm vụ của bạn là nhận một sơ đồ Amidakuji với 2 hoặc nhiều đường thẳng đứng (trong ví dụ này là 6) theo định dạng sau (trừ các chữ cái):

```
A B C D E F
| | | | | |
|-| |-| |-|
| |-| |-| |
| | | | |-|
| |-| |-| |
| | |-| |-|
| | |-| | |
|-| | |-| |
|-| |-| | |
| |-| | |-|
| | | | | |
B C A D F E
```

Và tạo ra một trong các số nguyên tố của nó (một lần nữa, trừ đi các chữ cái):

```
A B C D E F
| | | | | |
|-| | | |-|
| |-| | | |
| | | | | |
B C A D F E
```

Dòng đầu tiên và dòng cuối cùng có các chữ cái không phải là một phần của định dạng. Tôi đã thêm chúng vào đây để thể hiện phép hoán vị. Dòng đầu tiên hoặc dòng cuối cùng không bắt buộc phải không có chân |-|, cũng không yêu cầu kết quả đầu ra phải càng nhỏ gọn càng tốt.

Ví dụ đầu vào cụ thể này là một trong những biểu diễn ASCII (vô hạn) của sơ đồ Amidakuji ở đầu trang Wikipedia.

Có một quy tắc không rõ ràng về các sơ đồ ASCII này: các chân không được liền kề nhau.

```
|-|-| <- KHÔNG, đây không phải là một phép hoán đổi đơn lẻ!
```

Wikipedia giải thích một quy trình chuẩn để lấy một số nguyên tố từ một sơ đồ, được gọi là "bóng hoá", bao gồm việc áp dụng các phép giản hóa sau đây lặp đi lặp lại:

1) Từ nhánh phải sang nhánh trái:

```
| |-|      |-| |
|-| |  ->  | |-|
| |-|      |-| |
```

2) Loại bỏ các số đôi:

```
|-|        | |
|-|   ->   | |
```

Tôi không chắc liệu lời giải thích đó có rõ ràng hay không. Mã của bạn có thể sử dụng kỹ thuật đó hoặc bất kỳ thuật toán nào khác tạo ra các số nguyên tố cần thiết.

Mã ngắn nhất sẽ thắng.

Các quy tắc và điều kiện tiêu chuẩn được áp dụng. (Nếu dữ liệu đầu vào không hợp lệ, phần mềm của bạn có thể bị lỗi. Định dạng đầu vào/đầu ra có thể là stdin/stdout, đối số chuỗi, danh sách các dòng, ma trận ký tự, bất kỳ định dạng nào bạn thấy hợp nhất, v.v.)

![](/amidakuji2.jpg)

[Về Lời tựa đầu.](/chapter_0)