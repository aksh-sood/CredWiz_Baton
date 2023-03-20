import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "wallets")
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long walletId;
    @NotEmpty(meassge="Name should not be empty")
    private Long userName; 
     @NotEmpty(meassge="Phone number should not be empty")
    private int phoneNumber;
     @NotEmpty(meassge="Aadhaar number should not be empty")
    private int aadhaarNumber;
    private Double amount;
}
