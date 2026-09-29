export interface ProjectFile {
  path: string;
  category: 'config' | 'entity' | 'dto' | 'mapper' | 'repository' | 'security' | 'service' | 'controller' | 'template' | 'resource' | 'root';
  content: string;
}

export const PROJECT_NAME = "springboot-iotstar";

export const PROJECT_FILES: ProjectFile[] = [
  // POM.XML
  {
    path: "pom.xml",
    category: "root",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.4.1</version>
        <relativePath/>
    </parent>
    <groupId>vn.iotstar</groupId>
    <artifactId>springboot-iotstar</artifactId>
    <version>1.0.0</version>
    <name>springboot-iotstar</name>
    <description>Spring Boot 4 Security 7 MapStruct SQL Server Cloudinary Mail OTP</description>

    <properties>
        <java.version>21</java.version> <!-- Tương thích cao nhất trên JDK 21 - JDK 26 -->
        <mapstruct.version>1.6.3</mapstruct.version>
        <lombok.version>1.18.34</lombok.version>
    </properties>

    <dependencies>
        <!-- Web & Tomcat 11 nhúng -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Thymeleaf & Layout Dialect -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
        <dependency>
            <groupId>nz.net.ultraq.thymeleaf</groupId>
            <artifactId>thymeleaf-layout-dialect</artifactId>
        </dependency>
        <dependency>
            <groupId>org.thymeleaf.extras</groupId>
            <artifactId>thymeleaf-extras-springsecurity6</artifactId>
        </dependency>

        <!-- Spring Security -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>

        <!-- Validation -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>

        <!-- JPA & SQL Server JDBC Driver -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>com.microsoft.sqlserver</groupId>
            <artifactId>mssql-jdbc</artifactId>
            <scope>runtime</scope>
        </dependency>

        <!-- Mail Starter (Gmail SMTP OTP) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-mail</artifactId>
        </dependency>

        <!-- Cloudinary SDK Upload ảnh -->
        <dependency>
            <groupId>com.cloudinary</groupId>
            <artifactId>cloudinary-http5</artifactId>
            <version>2.4.0</version>
        </dependency>

        <!-- MapStruct & Lombok -->
        <dependency>
            <groupId>org.mapstruct</groupId>
            <artifactId>mapstruct</artifactId>
            <version>\${mapstruct.version}</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <!-- DevTools -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>\${java.version}</source>
                    <target>\${java.version}</target>
                    <annotationProcessorPaths>
                        <path>
                            <groupId>org.mapstruct</groupId>
                            <artifactId>mapstruct-processor</artifactId>
                            <version>\${mapstruct.version}</version>
                        </path>
                        <path>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                            <version>\${lombok.version}</version>
                        </path>
                        <path>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok-mapstruct-binding</artifactId>
                            <version>0.2.0</version>
                        </path>
                    </annotationProcessorPaths>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>`
  },

  // APPLICATION.PROPERTIES
  {
    path: "src/main/resources/application.properties",
    category: "resource",
    content: `spring.application.name=springboot-iotstar
server.port=8080

# KẾT NỐI SQL SERVER (sa / 123456)
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=webst_db;encrypt=false;trustServerCertificate=true;sslProtocol=TLSv1.2;characterEncoding=UTF-8
spring.datasource.username=sa
spring.datasource.password=123456
spring.datasource.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver

# JPA & HIBERNATE TỰ ĐỘNG SINH BẢNG
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.open-in-view=false

# THYMELEAF CONFIG
spring.thymeleaf.cache=false
spring.thymeleaf.encoding=UTF-8

# UPLOAD FILE MULTIPART
spring.servlet.multipart.enabled=true
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=20MB

# GMAIL SMTP GỬI MÃ OTP
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=nguyenhoa270826@gmail.com
spring.mail.password=zngp xqch bnsb cbxd
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.connectiontimeout=5000
spring.mail.properties.mail.smtp.timeout=5000
spring.mail.properties.mail.smtp.writetimeout=5000

# CLOUDINARY
cloudinary.cloud-name=dff5sample
cloudinary.api-key=576632571682623
cloudinary.api-secret=ikPEbngxnKwAw-XkvR1WVEaQZcI

# UTF-8
spring.servlet.encoding.enabled=true
spring.servlet.encoding.charset=UTF-8
spring.servlet.encoding.force=true
spring.main.allow-bean-definition-overriding=true`
  },

  // MAIN APPLICATION
  {
    path: "src/main/java/vn/iotstar/SpringbootApplication.java",
    category: "root",
    content: `package vn.iotstar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringbootApplication.class, args);
    }
}`
  },

  // CONFIG: CloudinaryConfig.java
  {
    path: "src/main/java/vn/iotstar/config/CloudinaryConfig.java",
    category: "config",
    content: `package vn.iotstar.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {
    @Value("\${cloudinary.cloud-name:dff5sample}")
    private String cloudName;

    @Value("\${cloudinary.api-key:576632571682623}")
    private String apiKey;

    @Value("\${cloudinary.api-secret:ikPEbngxnKwAw-XkvR1WVEaQZcI}")
    private String apiSecret;

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", cloudName,
                "api_key", apiKey,
                "api_secret", apiSecret,
                "secure", true
        ));
    }
}`
  },

  // CONFIG: EncodingConfig.java
  {
    path: "src/main/java/vn/iotstar/config/EncodingConfig.java",
    category: "config",
    content: `package vn.iotstar.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CharacterEncodingFilter;

@Configuration
public class EncodingConfig {
    @Bean
    public FilterRegistrationBean<CharacterEncodingFilter> characterEncodingFilter() {
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        filter.setForceEncoding(true);
        FilterRegistrationBean<CharacterEncodingFilter> registration = new FilterRegistrationBean<>(filter);
        registration.setOrder(Integer.MIN_VALUE);
        return registration;
    }
}`
  },

  // CONFIG: SecurityConfig.java
  {
    path: "src/main/java/vn/iotstar/config/SecurityConfig.java",
    category: "config",
    content: `package vn.iotstar.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import vn.iotstar.security.CustomUserDetailsService;

@Configuration
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomUserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authenticationProvider(authenticationProvider())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/", "/login", "/register", "/verify-otp", "/resend-otp",
                    "/forgot-password", "/reset-password",
                    "/css/**", "/js/**", "/images/**", "/uploads/**", "/error"
                ).permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .requestMatchers("/products/**").authenticated()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .loginProcessingUrl("/login")
                .usernameParameter("username") // Nhận cả username lẫn email
                .passwordParameter("password")
                .defaultSuccessUrl("/", true)
                .failureUrl("/login?error=true")
                .permitAll()
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout=true")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .permitAll()
            )
            .exceptionHandling(ex -> ex.accessDeniedPage("/login?denied=true"));

        return http.build();
    }
}`
  },

  // CONFIG: DataInitializer.java
  {
    path: "src/main/java/vn/iotstar/config/DataInitializer.java",
    category: "config",
    content: `package vn.iotstar.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import vn.iotstar.entity.Product;
import vn.iotstar.entity.Role;
import vn.iotstar.entity.User;
import vn.iotstar.repository.ProductRepository;
import vn.iotstar.repository.RoleRepository;
import vn.iotstar.repository.UserRepository;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    @Bean
    public CommandLineRunner initDatabase(
            RoleRepository roleRepository,
            UserRepository userRepository,
            ProductRepository productRepository,
            PasswordEncoder passwordEncoder) {
        return args -> {
            Role adminRole = roleRepository.findByNameIgnoreCase("ROLE_ADMIN")
                    .orElseGet(() -> roleRepository.save(new Role("ROLE_ADMIN")));
            Role userRole = roleRepository.findByNameIgnoreCase("ROLE_USER")
                    .orElseGet(() -> roleRepository.save(new Role("ROLE_USER")));

            // Tạo Admin nếu chưa có
            if (!userRepository.existsByUsername("admin")) {
                User admin = User.builder()
                        .username("admin")
                        .email("admin@hcmute.edu.vn")
                        .fullName("Quản Trị Viên Hệ Thống")
                        .password(passwordEncoder.encode("123456"))
                        .role(adminRole)
                        .enabled(true)
                        .images("https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg")
                        .build();
                userRepository.save(admin);
            }

            // Tạo User mẫu user01 như trong tài liệu ví dụ 2
            if (!userRepository.existsByUsername("user01")) {
                User user01 = User.builder()
                        .username("user01")
                        .email("user01@gmail.com")
                        .fullName("Nguyễn Hữu Trung")
                        .password(passwordEncoder.encode("123456"))
                        .role(userRole)
                        .enabled(true)
                        .images("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150")
                        .build();
                userRepository.save(user01);

                // Khởi tạo sản phẩm cho user01 (1 user - n product)
                if (productRepository.count() == 0) {
                    productRepository.save(Product.builder()
                            .name("Bàn phím cơ không dây Bluetooth")
                            .price(1250000.0)
                            .quantity(25)
                            .description("Bàn phím cơ 3 chế độ kết nối")
                            .image("https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500")
                            .user(user01)
                            .build());

                    productRepository.save(Product.builder()
                            .name("Chuột không dây công thái học Wireless")
                            .price(680000.0)
                            .quantity(40)
                            .description("Thiết kế chống mỏi cổ tay")
                            .image("https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500")
                            .user(user01)
                            .build());
                }
            }
        };
    }
}`
  },

  // ENTITY: Role.java
  {
    path: "src/main/java/vn/iotstar/entity/Role.java",
    category: "entity",
    content: `package vn.iotstar.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String name;

    @OneToMany(mappedBy = "role")
    @Builder.Default
    private List<User> users = new ArrayList<>();

    public Role(String name) {
        this.name = name;
    }
}`
  },

  // ENTITY: User.java
  {
    path: "src/main/java/vn/iotstar/entity/User.java",
    category: "entity",
    content: `package vn.iotstar.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(name = "uk_users_username", columnNames = "username"),
        @UniqueConstraint(name = "uk_users_email", columnNames = "email")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(nullable = false, length = 200)
    private String password;

    @Column(name = "full_name", nullable = false, length = 150, columnDefinition = "nvarchar(200)")
    private String fullName;

    @Column(length = 500)
    private String images;

    @Column(nullable = false)
    @Builder.Default
    private boolean enabled = false;

    @Column(nullable = false)
    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Product> products = new ArrayList<>();
}`
  },

  // ENTITY: Product.java
  {
    path: "src/main/java/vn/iotstar/entity/Product.java",
    category: "entity",
    content: `package vn.iotstar.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200, columnDefinition = "nvarchar(255)")
    private String name;

    @Column(nullable = false)
    private Double price;

    @Column(length = 1000, columnDefinition = "nvarchar(1000)")
    private String description;

    @Column(length = 500)
    private String image;

    @Column(nullable = false)
    @Builder.Default
    private Integer quantity = 0;

    @Column(nullable = false)
    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    // Mối quan hệ 1 user - n product
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}`
  },

  // ENTITY: OtpToken.java
  {
    path: "src/main/java/vn/iotstar/entity/OtpToken.java",
    category: "entity",
    content: `package vn.iotstar.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "otp_tokens")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OtpToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String email;

    @Column(nullable = false, length = 10)
    private String otp;

    @Column(nullable = false, length = 30)
    private String type; // REGISTER hoặc FORGOT_PASSWORD

    @Column(nullable = false)
    private LocalDateTime expiryTime;

    @Column(nullable = false)
    @Builder.Default
    private boolean used = false;
}`
  },

  // DTOs
  {
    path: "src/main/java/vn/iotstar/dto/UserDTO.java",
    category: "dto",
    content: `package vn.iotstar.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {
    private Long id;
    @NotBlank(message = "Username không được để trống")
    private String username;
    @Email @NotBlank(message = "Email không được để trống")
    private String email;
    @NotBlank(message = "Họ tên không được để trống")
    private String fullName;
    private String images;
    private Long roleId;
    private String roleName;
    private boolean enabled;
    private long productCount;
    private LocalDateTime createdAt;
}`
  },
  {
    path: "src/main/java/vn/iotstar/dto/ProductDTO.java",
    category: "dto",
    content: `package vn.iotstar.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDTO {
    private Long id;
    @NotBlank(message = "Tên sản phẩm không được để trống")
    private String name;
    @NotNull(message = "Giá sản phẩm không được để trống")
    @Min(value = 0, message = "Giá không được nhỏ hơn 0")
    private Double price;
    private String description;
    private String image;
    @NotNull(message = "Số lượng không được để trống")
    @Min(value = 0, message = "Số lượng không được âm")
    private Integer quantity;
    private Long userId;
    private String userName;
    private String userFullName;
    private LocalDateTime createdAt;
}`
  },
  {
    path: "src/main/java/vn/iotstar/dto/LoginDTO.java",
    category: "dto",
    content: `package vn.iotstar.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    @NotBlank(message = "Username hoặc Email không được để trống")
    private String login;

    @NotBlank(message = "Mật khẩu không được để trống")
    private String password;
}`
  },
  {
    path: "src/main/java/vn/iotstar/dto/RegisterDTO.java",
    category: "dto",
    content: `package vn.iotstar.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterDTO {
    @NotBlank(message = "Username không được để trống")
    @Size(min = 3, max = 50)
    private String username;

    @Email(message = "Email không hợp lệ")
    @NotBlank(message = "Email không được để trống")
    private String email;

    @NotBlank(message = "Họ và tên không được để trống")
    private String fullName;

    @NotBlank(message = "Mật khẩu không được để trống")
    @Size(min = 6, message = "Mật khẩu ít nhất 6 ký tự")
    private String password;

    @NotBlank(message = "Xác nhận mật khẩu không được để trống")
    private String confirmPassword;
}`
  },
  {
    path: "src/main/java/vn/iotstar/dto/VerifyOtpDTO.java",
    category: "dto",
    content: `package vn.iotstar.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VerifyOtpDTO {
    @Email @NotBlank
    private String email;

    @NotBlank(message = "Vui lòng nhập mã OTP gồm 6 chữ số")
    @Size(min = 6, max = 6, message = "Mã OTP gồm 6 chữ số")
    private String otp;

    private String type;
}`
  },
  {
    path: "src/main/java/vn/iotstar/dto/ForgotPasswordDTO.java",
    category: "dto",
    content: `package vn.iotstar.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ForgotPasswordDTO {
    @Email(message = "Email không hợp lệ")
    @NotBlank(message = "Vui lòng nhập email đã đăng ký")
    private String email;
}`
  },
  {
    path: "src/main/java/vn/iotstar/dto/ResetPasswordDTO.java",
    category: "dto",
    content: `package vn.iotstar.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResetPasswordDTO {
    @Email @NotBlank
    private String email;

    @NotBlank(message = "Nhập mã OTP nhận qua email")
    private String otp;

    @NotBlank(message = "Nhập mật khẩu mới")
    @Size(min = 6, message = "Mật khẩu ít nhất 6 ký tự")
    private String newPassword;

    @NotBlank(message = "Nhập lại mật khẩu mới")
    private String confirmPassword;
}`
  },

  // MAPPER: UserMapper.java & ProductMapper.java
  {
    path: "src/main/java/vn/iotstar/mapper/UserMapper.java",
    category: "mapper",
    content: `package vn.iotstar.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import vn.iotstar.dto.UserDTO;
import vn.iotstar.entity.User;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    @Mapping(target = "roleId", source = "role.id")
    @Mapping(target = "roleName", source = "role.name")
    @Mapping(target = "productCount", expression = "java(entity.getProducts() != null ? entity.getProducts().size() : 0L)")
    UserDTO toDto(User entity);

    @Mapping(target = "role", ignore = true)
    @Mapping(target = "products", ignore = true)
    User toEntity(UserDTO dto);
}`
  },
  {
    path: "src/main/java/vn/iotstar/mapper/ProductMapper.java",
    category: "mapper",
    content: `package vn.iotstar.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import vn.iotstar.dto.ProductDTO;
import vn.iotstar.entity.Product;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProductMapper {
    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "userName", source = "user.username")
    @Mapping(target = "userFullName", source = "user.fullName")
    ProductDTO toDto(Product entity);

    @Mapping(target = "user", ignore = true)
    Product toEntity(ProductDTO dto);
}`
  },

  // REPOSITORIES
  {
    path: "src/main/java/vn/iotstar/repository/RoleRepository.java",
    category: "repository",
    content: `package vn.iotstar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.iotstar.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
    Optional<Role> findByNameIgnoreCase(String name);
}`
  },
  {
    path: "src/main/java/vn/iotstar/repository/UserRepository.java",
    category: "repository",
    content: `package vn.iotstar.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.iotstar.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailIgnoreCase(String email);
    boolean existsByUsername(String username);
    boolean existsByEmailIgnoreCase(String email);

    @Query("SELECT u FROM User u WHERE u.username = :login OR u.email = :login")
    Optional<User> findByUsernameOrEmail(@Param("login") String username, @Param("login") String email);

    @Query("SELECT u FROM User u JOIN FETCH u.role WHERE u.email = :email")
    Optional<User> findByEmailWithRole(@Param("email") String email);

    @Query("SELECT u FROM User u WHERE " +
           "(:keyword IS NULL OR LOWER(u.username) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
           "OR LOWER(u.fullName) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
           "OR LOWER(u.email) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    Page<User> searchUsers(@Param("keyword") String keyword, Pageable pageable);

    long countByEnabled(boolean enabled);
}`
  },
  {
    path: "src/main/java/vn/iotstar/repository/ProductRepository.java",
    category: "repository",
    content: `package vn.iotstar.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.iotstar.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE " +
           "(:keyword IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
           "OR LOWER(p.description) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    Page<Product> searchProducts(@Param("keyword") String keyword, Pageable pageable);

    Page<Product> findByUserId(Long userId, Pageable pageable);

    long countByUserId(Long userId);
}`
  },
  {
    path: "src/main/java/vn/iotstar/repository/OtpTokenRepository.java",
    category: "repository",
    content: `package vn.iotstar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.iotstar.entity.OtpToken;

import java.time.LocalDateTime;
import java.util.Optional;

public interface OtpTokenRepository extends JpaRepository<OtpToken, Long> {
    Optional<OtpToken> findTopByEmailAndOtpAndTypeAndUsedFalseAndExpiryTimeAfterOrderByExpiryTimeDesc(
            String email, String otp, String type, LocalDateTime now);
}`
  },

  // SECURITY: CustomUserDetails & CustomUserDetailsService
  {
    path: "src/main/java/vn/iotstar/security/CustomUserDetails.java",
    category: "security",
    content: `package vn.iotstar.security;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Getter
public class CustomUserDetails implements UserDetails, Serializable {
    private static final long serialVersionUID = 1L;

    private final Long id;
    private final String username;
    private final String email;
    private final String password;
    private final String fullName;
    private final String images;
    private final String role;
    private final boolean enabled;

    public CustomUserDetails(Long id, String username, String email, String password,
                             String fullName, String images, String role, boolean enabled) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.images = images;
        this.role = role;
        this.enabled = enabled;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String roleName = role.startsWith("ROLE_") ? role : "ROLE_" + role;
        return List.of(new SimpleGrantedAuthority(roleName));
    }

    @Override public String getPassword() { return password; }
    @Override public String getUsername() { return username; }
    @Override public boolean isAccountNonExpired() { return true; }
    @Override public boolean isAccountNonLocked() { return true; }
    @Override public boolean isCredentialsNonExpired() { return true; }
    @Override public boolean isEnabled() { return enabled; }
}`
  },
  {
    path: "src/main/java/vn/iotstar/security/CustomUserDetailsService.java",
    category: "security",
    content: `package vn.iotstar.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import vn.iotstar.entity.User;
import vn.iotstar.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameOrEmail(login, login)
                .orElseThrow(() -> new UsernameNotFoundException("Không tìm thấy người dùng với: " + login));

        String roleName = user.getRole() != null ? user.getRole().getName() : "USER";

        return new CustomUserDetails(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                user.getFullName(),
                user.getImages(),
                roleName,
                user.isEnabled()
        );
    }
}`
  },

  // SERVICES & IMPL
  {
    path: "src/main/java/vn/iotstar/service/CloudinaryService.java",
    category: "service",
    content: `package vn.iotstar.service;

import org.springframework.web.multipart.MultipartFile;

public interface CloudinaryService {
    String uploadImage(MultipartFile file);
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/impl/CloudinaryServiceImpl.java",
    category: "service",
    content: `package vn.iotstar.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import vn.iotstar.service.CloudinaryService;

import java.io.IOException;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CloudinaryServiceImpl implements CloudinaryService {

    private final Cloudinary cloudinary;

    @Override
    public String uploadImage(MultipartFile file) {
        if (file == null || file.isEmpty()) return null;
        try {
            Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap(
                    "folder", "iotstar_shop"
            ));
            return uploadResult.get("secure_url").toString();
        } catch (IOException e) {
            throw new RuntimeException("Lỗi upload ảnh lên Cloudinary: " + e.getMessage());
        }
    }
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/EmailService.java",
    category: "service",
    content: `package vn.iotstar.service;

public interface EmailService {
    void sendOtpEmail(String toEmail, String otp, String subject, String actionName);
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/impl/EmailServiceImpl.java",
    category: "service",
    content: `package vn.iotstar.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import vn.iotstar.service.EmailService;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;
    private static final String FROM_EMAIL = "nguyenhoa270826@gmail.com";
    private static final String FROM_PASSWORD = "zngp xqch bnsb cbxd";

    @Override
    public void sendOtpEmail(String toEmail, String otp, String subject, String actionName) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(FROM_EMAIL);
        message.setTo(toEmail);
        message.setSubject("[IOTSTAR SHOP] " + subject);
        message.setText("Xin chào,\\n\\n"
                + "Mã OTP xác thực " + actionName + " của bạn là: " + otp + "\\n"
                + "Mã OTP này có hiệu lực trong 5 phút. Vui lòng không chia sẻ cho bất kỳ ai.\\n\\n"
                + "Trân trọng,\\nBan quản trị IOTSTAR SHOP");
        mailSender.send(message);
    }
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/UserService.java",
    category: "service",
    content: `package vn.iotstar.service;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;
import vn.iotstar.dto.UserDTO;

public interface UserService {
    Page<UserDTO> getUsers(String keyword, int page, int size);
    UserDTO getUserById(Long id);
    void saveUser(UserDTO dto, MultipartFile avatarFile, String rawPassword);
    void deleteUser(Long id);
    long countUsers();
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/impl/UserServiceImpl.java",
    category: "service",
    content: `package vn.iotstar.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import vn.iotstar.dto.UserDTO;
import vn.iotstar.entity.Role;
import vn.iotstar.entity.User;
import vn.iotstar.mapper.UserMapper;
import vn.iotstar.repository.RoleRepository;
import vn.iotstar.repository.UserRepository;
import vn.iotstar.service.CloudinaryService;
import vn.iotstar.service.UserService;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final CloudinaryService cloudinaryService;

    @Override
    public Page<UserDTO> getUsers(String keyword, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return userRepository.searchUsers(keyword, pageable).map(userMapper::toDto);
    }

    @Override
    public UserDTO getUserById(Long id) {
        return userRepository.findById(id)
                .map(userMapper::toDto)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy người dùng ID: " + id));
    }

    @Override
    @Transactional
    public void saveUser(UserDTO dto, MultipartFile avatarFile, String rawPassword) {
        User user;
        if (dto.getId() != null) {
            user = userRepository.findById(dto.getId())
                    .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy user"));
            user.setFullName(dto.getFullName());
            user.setEmail(dto.getEmail().toLowerCase());
            user.setEnabled(dto.isEnabled());
            if (rawPassword != null && !rawPassword.isBlank()) {
                user.setPassword(passwordEncoder.encode(rawPassword));
            }
        } else {
            user = userMapper.toEntity(dto);
            user.setPassword(passwordEncoder.encode(rawPassword != null ? rawPassword : "123456"));
        }

        if (avatarFile != null && !avatarFile.isEmpty()) {
            user.setImages(cloudinaryService.uploadImage(avatarFile));
        }

        if (dto.getRoleId() != null) {
            Role role = roleRepository.findById(dto.getRoleId())
                    .orElseThrow(() -> new IllegalArgumentException("Role không hợp lệ"));
            user.setRole(role);
        }
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public long countUsers() {
        return userRepository.count();
    }
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/ProductService.java",
    category: "service",
    content: `package vn.iotstar.service;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;
import vn.iotstar.dto.ProductDTO;

public interface ProductService {
    Page<ProductDTO> getProducts(String keyword, int page, int size);
    Page<ProductDTO> getProductsByUser(Long userId, int page, int size);
    ProductDTO getProductById(Long id);
    void saveProduct(ProductDTO dto, MultipartFile imageFile, Long ownerUserId);
    void deleteProduct(Long id);
    long countUserProducts(Long userId);
    long countAllProducts();
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/impl/ProductServiceImpl.java",
    category: "service",
    content: `package vn.iotstar.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import vn.iotstar.dto.ProductDTO;
import vn.iotstar.entity.Product;
import vn.iotstar.entity.User;
import vn.iotstar.mapper.ProductMapper;
import vn.iotstar.repository.ProductRepository;
import vn.iotstar.repository.UserRepository;
import vn.iotstar.service.CloudinaryService;
import vn.iotstar.service.ProductService;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final ProductMapper productMapper;
    private final CloudinaryService cloudinaryService;

    @Override
    public Page<ProductDTO> getProducts(String keyword, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return productRepository.searchProducts(keyword, pageable).map(productMapper::toDto);
    }

    @Override
    public Page<ProductDTO> getProductsByUser(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return productRepository.findByUserId(userId, pageable).map(productMapper::toDto);
    }

    @Override
    public ProductDTO getProductById(Long id) {
        return productRepository.findById(id)
                .map(productMapper::toDto)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy SP ID: " + id));
    }

    @Override
    @Transactional
    public void saveProduct(ProductDTO dto, MultipartFile imageFile, Long ownerUserId) {
        Product product;
        if (dto.getId() != null) {
            product = productRepository.findById(dto.getId())
                    .orElseThrow(() -> new IllegalArgumentException("SP không tồn tại"));
            product.setName(dto.getName());
            product.setPrice(dto.getPrice());
            product.setQuantity(dto.getQuantity());
            product.setDescription(dto.getDescription());
        } else {
            product = productMapper.toEntity(dto);
            User owner = userRepository.findById(ownerUserId)
                    .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy chủ sở hữu"));
            product.setUser(owner);
        }

        if (imageFile != null && !imageFile.isEmpty()) {
            product.setImage(cloudinaryService.uploadImage(imageFile));
        }
        productRepository.save(product);
    }

    @Override
    @Transactional
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public long countUserProducts(Long userId) {
        return productRepository.countByUserId(userId);
    }

    @Override
    public long countAllProducts() {
        return productRepository.count();
    }
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/AuthService.java",
    category: "service",
    content: `package vn.iotstar.service;

import org.springframework.web.multipart.MultipartFile;
import vn.iotstar.dto.RegisterDTO;
import vn.iotstar.dto.ResetPasswordDTO;

public interface AuthService {
    void registerUser(RegisterDTO dto, MultipartFile avatarFile);
    void generateAndSendOtp(String email, String type, String actionDesc);
    boolean verifyRegistrationOtp(String email, String otp);
    void sendForgotPasswordOtp(String email);
    boolean resetPasswordWithOtp(ResetPasswordDTO dto);
}`
  },
  {
    path: "src/main/java/vn/iotstar/service/impl/AuthServiceImpl.java",
    category: "service",
    content: `package vn.iotstar.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import vn.iotstar.dto.RegisterDTO;
import vn.iotstar.dto.ResetPasswordDTO;
import vn.iotstar.entity.OtpToken;
import vn.iotstar.entity.Role;
import vn.iotstar.entity.User;
import vn.iotstar.repository.OtpTokenRepository;
import vn.iotstar.repository.RoleRepository;
import vn.iotstar.repository.UserRepository;
import vn.iotstar.service.AuthService;
import vn.iotstar.service.CloudinaryService;
import vn.iotstar.service.EmailService;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final OtpTokenRepository otpTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;
    private final CloudinaryService cloudinaryService;

    @Override
    @Transactional
    public void registerUser(RegisterDTO dto, MultipartFile avatarFile) {
        if (userRepository.existsByUsername(dto.getUsername())) {
            throw new IllegalArgumentException("Username đã tồn tại!");
        }
        if (userRepository.existsByEmailIgnoreCase(dto.getEmail())) {
            throw new IllegalArgumentException("Email đã được đăng ký!");
        }
        if (!dto.getPassword().equals(dto.getConfirmPassword())) {
            throw new IllegalArgumentException("Mật khẩu xác nhận không khớp!");
        }

        Role roleUser = roleRepository.findByNameIgnoreCase("ROLE_USER")
                .orElseGet(() -> roleRepository.save(new Role("ROLE_USER")));

        String avatarUrl = "/images/avatar-default.png";
        if (avatarFile != null && !avatarFile.isEmpty()) {
            avatarUrl = cloudinaryService.uploadImage(avatarFile);
        }

        User user = User.builder()
                .username(dto.getUsername().trim())
                .email(dto.getEmail().trim().toLowerCase())
                .fullName(dto.getFullName().trim())
                .password(passwordEncoder.encode(dto.getPassword()))
                .role(roleUser)
                .images(avatarUrl)
                .enabled(false) // Cần OTP kích hoạt
                .build();
        userRepository.save(user);

        generateAndSendOtp(user.getEmail(), "REGISTER", "Xác thực đăng ký tài khoản");
    }

    @Override
    @Transactional
    public void generateAndSendOtp(String email, String type, String actionDesc) {
        String otp = String.format("%06d", new Random().nextInt(999999));
        OtpToken token = OtpToken.builder()
                .email(email.toLowerCase())
                .otp(otp)
                .type(type)
                .expiryTime(LocalDateTime.now().plusMinutes(5))
                .used(false)
                .build();
        otpTokenRepository.save(token);

        emailService.sendOtpEmail(email, otp, actionDesc, actionDesc);
    }

    @Override
    @Transactional
    public boolean verifyRegistrationOtp(String email, String otp) {
        Optional<OtpToken> tokenOpt = otpTokenRepository
                .findTopByEmailAndOtpAndTypeAndUsedFalseAndExpiryTimeAfterOrderByExpiryTimeDesc(
                        email.toLowerCase(), otp, "REGISTER", LocalDateTime.now()
                );
        if (tokenOpt.isPresent()) {
            OtpToken token = tokenOpt.get();
            token.setUsed(true);
            otpTokenRepository.save(token);

            User user = userRepository.findByEmailIgnoreCase(email)
                    .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy tài khoản."));
            user.setEnabled(true);
            userRepository.save(user);
            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public void sendForgotPasswordOtp(String email) {
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new IllegalArgumentException("Email này chưa đăng ký tài khoản trong hệ thống!"));
        generateAndSendOtp(user.getEmail(), "FORGOT_PASSWORD", "Đặt lại mật khẩu");
    }

    @Override
    @Transactional
    public boolean resetPasswordWithOtp(ResetPasswordDTO dto) {
        if (!dto.getNewPassword().equals(dto.getConfirmPassword())) {
            throw new IllegalArgumentException("Mật khẩu xác nhận không khớp!");
        }
        Optional<OtpToken> tokenOpt = otpTokenRepository
                .findTopByEmailAndOtpAndTypeAndUsedFalseAndExpiryTimeAfterOrderByExpiryTimeDesc(
                        dto.getEmail().toLowerCase(), dto.getOtp(), "FORGOT_PASSWORD", LocalDateTime.now()
                );
        if (tokenOpt.isPresent()) {
            OtpToken token = tokenOpt.get();
            token.setUsed(true);
            otpTokenRepository.save(token);

            User user = userRepository.findByEmailIgnoreCase(dto.getEmail())
                    .orElseThrow(() -> new IllegalArgumentException("Người dùng không tồn tại."));
            user.setPassword(passwordEncoder.encode(dto.getNewPassword()));
            userRepository.save(user);
            return true;
        }
        return false;
    }
}`
  },

  // CONTROLLERS
  {
    path: "src/main/java/vn/iotstar/controller/HomeController.java",
    category: "controller",
    content: `package vn.iotstar.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import vn.iotstar.security.CustomUserDetails;
import vn.iotstar.service.ProductService;
import vn.iotstar.service.UserService;

@Controller
@RequiredArgsConstructor
public class HomeController {

    private final UserService userService;
    private final ProductService productService;

    @GetMapping("/")
    public String home(Model model, @AuthenticationPrincipal CustomUserDetails userDetails) {
        model.addAttribute("totalUsers", userService.countUsers());
        model.addAttribute("totalProducts", productService.countAllProducts());
        if (userDetails != null) {
            model.addAttribute("myProductCount", productService.countUserProducts(userDetails.getId()));
        }
        return "home";
    }
}`
  },
  {
    path: "src/main/java/vn/iotstar/controller/AuthController.java",
    category: "controller",
    content: `package vn.iotstar.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import vn.iotstar.dto.ForgotPasswordDTO;
import vn.iotstar.dto.RegisterDTO;
import vn.iotstar.dto.ResetPasswordDTO;
import vn.iotstar.dto.VerifyOtpDTO;
import vn.iotstar.service.AuthService;

@Controller
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @GetMapping("/login")
    public String login() {
        return "auth/login";
    }

    @GetMapping("/register")
    public String registerForm(Model model) {
        model.addAttribute("registerDTO", new RegisterDTO());
        return "auth/register";
    }

    @PostMapping("/register")
    public String handleRegister(@Valid @ModelAttribute("registerDTO") RegisterDTO dto,
                                 BindingResult bindingResult,
                                 @RequestParam(value = "avatarFile", required = false) MultipartFile avatarFile,
                                 RedirectAttributes redirectAttributes,
                                 Model model) {
        if (bindingResult.hasErrors()) {
            return "auth/register";
        }
        try {
            authService.registerUser(dto, avatarFile);
            redirectAttributes.addFlashAttribute("successMessage",
                    "Đăng ký thành công! Vui lòng kiểm tra email và nhập mã OTP kích hoạt tài khoản.");
            return "redirect:/verify-otp?email=" + dto.getEmail();
        } catch (Exception ex) {
            model.addAttribute("errorMessage", ex.getMessage());
            return "auth/register";
        }
    }

    @GetMapping("/verify-otp")
    public String verifyOtpPage(@RequestParam("email") String email, Model model) {
        VerifyOtpDTO dto = new VerifyOtpDTO();
        dto.setEmail(email);
        dto.setType("REGISTER");
        model.addAttribute("verifyOtpDTO", dto);
        return "auth/verify-otp";
    }

    @PostMapping("/verify-otp")
    public String handleVerifyOtp(@Valid @ModelAttribute("verifyOtpDTO") VerifyOtpDTO dto,
                                  BindingResult bindingResult,
                                  RedirectAttributes redirectAttributes,
                                  Model model) {
        if (bindingResult.hasErrors()) {
            return "auth/verify-otp";
        }
        boolean ok = authService.verifyRegistrationOtp(dto.getEmail(), dto.getOtp());
        if (ok) {
            redirectAttributes.addFlashAttribute("successMessage", "Kích hoạt tài khoản thành công! Hãy đăng nhập.");
            return "redirect:/login";
        } else {
            model.addAttribute("errorMessage", "Mã OTP không đúng hoặc đã hết hạn.");
            return "auth/verify-otp";
        }
    }

    @GetMapping("/resend-otp")
    public String resendOtp(@RequestParam("email") String email, RedirectAttributes redirectAttributes) {
        try {
            authService.generateAndSendOtp(email, "REGISTER", "Gửi lại OTP kích hoạt tài khoản");
            redirectAttributes.addFlashAttribute("successMessage", "Mã OTP mới đã gửi tới email!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", e.getMessage());
        }
        return "redirect:/verify-otp?email=" + email;
    }

    @GetMapping("/forgot-password")
    public String forgotPasswordForm(Model model) {
        model.addAttribute("forgotPasswordDTO", new ForgotPasswordDTO());
        return "auth/forgot-password";
    }

    @PostMapping("/forgot-password")
    public String handleForgotPassword(@Valid @ModelAttribute("forgotPasswordDTO") ForgotPasswordDTO dto,
                                       BindingResult bindingResult,
                                       RedirectAttributes redirectAttributes,
                                       Model model) {
        if (bindingResult.hasErrors()) {
            return "auth/forgot-password";
        }
        try {
            authService.sendForgotPasswordOtp(dto.getEmail());
            redirectAttributes.addFlashAttribute("successMessage", "Mã OTP đã gửi vào email!");
            return "redirect:/reset-password?email=" + dto.getEmail();
        } catch (Exception e) {
            model.addAttribute("errorMessage", e.getMessage());
            return "auth/forgot-password";
        }
    }

    @GetMapping("/reset-password")
    public String resetPasswordPage(@RequestParam("email") String email, Model model) {
        ResetPasswordDTO dto = new ResetPasswordDTO();
        dto.setEmail(email);
        model.addAttribute("resetPasswordDTO", dto);
        return "auth/reset-password";
    }

    @PostMapping("/reset-password")
    public String handleResetPassword(@Valid @ModelAttribute("resetPasswordDTO") ResetPasswordDTO dto,
                                      BindingResult bindingResult,
                                      RedirectAttributes redirectAttributes,
                                      Model model) {
        if (bindingResult.hasErrors()) {
            return "auth/reset-password";
        }
        try {
            boolean ok = authService.resetPasswordWithOtp(dto);
            if (ok) {
                redirectAttributes.addFlashAttribute("successMessage", "Đặt lại mật khẩu thành công!");
                return "redirect:/login";
            } else {
                model.addAttribute("errorMessage", "Mã OTP không đúng hoặc hết hạn!");
                return "auth/reset-password";
            }
        } catch (Exception ex) {
            model.addAttribute("errorMessage", ex.getMessage());
            return "auth/reset-password";
        }
    }
}`
  },
  {
    path: "src/main/java/vn/iotstar/controller/UserController.java",
    category: "controller",
    content: `package vn.iotstar.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import vn.iotstar.dto.UserDTO;
import vn.iotstar.repository.RoleRepository;
import vn.iotstar.service.UserService;

@Controller
@RequestMapping("/admin/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final RoleRepository roleRepository;

    @GetMapping
    public String listUsers(@RequestParam(value = "keyword", required = false) String keyword,
                            @RequestParam(value = "page", defaultValue = "0") int page,
                            @RequestParam(value = "size", defaultValue = "5") int size,
                            Model model) {
        Page<UserDTO> userPage = userService.getUsers(keyword, page, size);
        model.addAttribute("userPage", userPage);
        model.addAttribute("keyword", keyword);
        model.addAttribute("totalUsers", userService.countUsers());
        return "admin/users/list";
    }

    @GetMapping("/create")
    public String createUserForm(Model model) {
        model.addAttribute("userDTO", new UserDTO());
        model.addAttribute("roles", roleRepository.findAll());
        return "admin/users/form";
    }

    @GetMapping("/edit/{id}")
    public String editUserForm(@PathVariable Long id, Model model) {
        model.addAttribute("userDTO", userService.getUserById(id));
        model.addAttribute("roles", roleRepository.findAll());
        return "admin/users/form";
    }

    @PostMapping("/save")
    public String saveUser(@ModelAttribute("userDTO") UserDTO userDTO,
                           @RequestParam(value = "avatarFile", required = false) MultipartFile avatarFile,
                           @RequestParam(value = "password", required = false) String password,
                           RedirectAttributes redirectAttributes) {
        userService.saveUser(userDTO, avatarFile, password);
        redirectAttributes.addFlashAttribute("successMessage", "Lưu người dùng thành công!");
        return "redirect:/admin/users";
    }

    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        userService.deleteUser(id);
        redirectAttributes.addFlashAttribute("successMessage", "Đã xóa người dùng!");
        return "redirect:/admin/users";
    }
}`
  },
  {
    path: "src/main/java/vn/iotstar/controller/ProductController.java",
    category: "controller",
    content: `package vn.iotstar.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import vn.iotstar.dto.ProductDTO;
import vn.iotstar.security.CustomUserDetails;
import vn.iotstar.service.ProductService;

@Controller
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public String listProducts(@RequestParam(value = "keyword", required = false) String keyword,
                               @RequestParam(value = "page", defaultValue = "0") int page,
                               @RequestParam(value = "size", defaultValue = "6") int size,
                               Model model,
                               @AuthenticationPrincipal CustomUserDetails userDetails) {
        Page<ProductDTO> productPage = productService.getProducts(keyword, page, size);
        model.addAttribute("productPage", productPage);
        model.addAttribute("keyword", keyword);
        model.addAttribute("totalProducts", productService.countAllProducts());
        if (userDetails != null) {
            model.addAttribute("myProductCount", productService.countUserProducts(userDetails.getId()));
        }
        return "products/list";
    }

    @GetMapping("/create")
    public String createProductForm(Model model) {
        model.addAttribute("productDTO", new ProductDTO());
        return "products/form";
    }

    @GetMapping("/edit/{id}")
    public String editProductForm(@PathVariable Long id, Model model) {
        model.addAttribute("productDTO", productService.getProductById(id));
        return "products/form";
    }

    @PostMapping("/save")
    public String saveProduct(@Valid @ModelAttribute("productDTO") ProductDTO dto,
                              BindingResult bindingResult,
                              @RequestParam(value = "imageFile", required = false) MultipartFile imageFile,
                              @AuthenticationPrincipal CustomUserDetails userDetails,
                              RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            return "products/form";
        }
        productService.saveProduct(dto, imageFile, userDetails.getId());
        redirectAttributes.addFlashAttribute("successMessage", "Lưu sản phẩm thành công!");
        return "redirect:/products";
    }

    @GetMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        productService.deleteProduct(id);
        redirectAttributes.addFlashAttribute("successMessage", "Đã xóa sản phẩm!");
        return "redirect:/products";
    }
}`
  },

  // THYMELEAF TEMPLATES
  {
    path: "src/main/resources/templates/layouts/layout.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org" xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title layout:title-pattern="$CONTENT_TITLE - IOTSTAR SHOP">IOTSTAR SHOP</title>
    <link rel="stylesheet" th:href="@{/css/app.css}">
</head>
<body>
    <header th:replace="~{fragments/header :: header}"></header>
    <main layout:fragment="content" class="container"></main>
    <footer class="footer">
        <p>Bản quyền © 2026 IOTSTAR SHOP - Spring Boot 4 & Spring Security 7</p>
    </footer>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/fragments/header.html",
    category: "template",
    content: `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org"
      xmlns:sec="http://www.thymeleaf.org/extras/spring-security">
<body>
<header th:fragment="header" class="topbar">
    <div class="brand">
        <a th:href="@{/}">IOTSTAR SHOP</a>
    </div>

    <nav class="nav-links">
        <a th:href="@{/}">Trang chủ</a>
        <a th:href="@{/products}" sec:authorize="isAuthenticated()">Sản phẩm</a>
        <a th:href="@{/admin/users}" sec:authorize="hasRole('ADMIN')">Quản lý User (Admin)</a>
    </nav>

    <!-- Hiển thị Avatar, Họ tên, Username, Role, Nút Đăng xuất theo đúng Ví dụ 2 & 3 -->
    <div class="account" sec:authorize="isAuthenticated()">
        <img th:src="\${#authentication.principal.images != null && !#strings.isEmpty(#authentication.principal.images) ? #authentication.principal.images : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}"
             alt="Avatar" class="avatar-thumb" />

        <div class="user-meta">
            <strong th:text="\${#authentication.principal.fullName}">Họ Tên</strong>
            <span class="user-sub">
                <span th:text="'(' + \${#authentication.principal.username} + ')'"></span>
                <span class="badge" th:text="\${#authentication.principal.role}">ROLE_USER</span>
            </span>
        </div>

        <form th:action="@{/logout}" method="post" style="display:inline; margin-left: 12px;">
            <button class="btn btn-logout" type="submit">Đăng xuất</button>
        </form>
    </div>

    <div class="auth-actions" sec:authorize="!isAuthenticated()">
        <a th:href="@{/login}" class="btn primary small">Đăng nhập</a>
        <a th:href="@{/register}" class="btn secondary small">Đăng ký</a>
    </div>
</header>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/home.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layouts/layout}">
<head>
    <title>Trang chủ</title>
</head>
<body>
<main layout:fragment="content" class="container">
    <div class="welcome-box">
        <h1>Trang chủ UTEShop</h1>
        <p>Xin chào <strong th:text="\${#authentication.principal.fullName}">User</strong>!</p>
        <p class="sub-text">Hệ thống phân quyền Spring Security 7 kết nối SQL Server, Cloudinary & Xác thực OTP qua Gmail.</p>
    </div>

    <!-- Đếm số user và đếm số product theo yêu cầu đề bài -->
    <div class="cards">
        <div class="card">
            <b>TỔNG SỐ NGƯỜI DÙNG</b>
            <strong th:text="\${totalUsers}">0</strong>
            <span class="card-hint">Người dùng đã lưu trong CSDL</span>
        </div>
        <div class="card">
            <b>TỔNG SỐ SẢN PHẨM</b>
            <strong th:text="\${totalProducts}">0</strong>
            <span class="card-hint">Toàn bộ kho hàng</span>
        </div>
        <div class="card">
            <b>SẢN PHẨM CỦA BẠN</b>
            <strong th:text="\${myProductCount}">0</strong>
            <span class="card-hint">Sản phẩm thuộc user đăng nhập</span>
        </div>
        <div class="card">
            <b>TRẠNG THÁI BẢO MẬT</b>
            <strong style="color: #16a34a; font-size: 24px;">Hoạt động</strong>
            <span class="card-hint">Session & Role Authorization</span>
        </div>
    </div>

    <div class="quick-links">
        <a th:href="@{/products}" class="btn primary">Quản lý Sản phẩm (CRUD & Upload Cloudinary)</a>
        <a th:href="@{/admin/users}" class="btn secondary" sec:authorize="hasRole('ADMIN')">Quản trị Người dùng (Admin)</a>
    </div>
</main>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/auth/login.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập - IOTSTAR SHOP</title>
    <link rel="stylesheet" th:href="@{/css/app.css}">
</head>
<body class="auth-page">
    <div class="auth-card">
        <h1>IOTSTAR SHOP</h1>
        <h2>Đăng nhập hệ thống</h2>

        <div class="alert error" th:if="\${param.error}">
            Username/Email hoặc mật khẩu không chính xác!
        </div>
        <div class="alert success" th:if="\${param.logout}">
            Bạn đã đăng xuất an toàn khỏi hệ thống.
        </div>
        <div class="alert success" th:if="\${successMessage}" th:text="\${successMessage}"></div>

        <!-- Form đăng nhập cho phép nhập Username hoặc Email đều được -->
        <form th:action="@{/login}" method="post">
            <div class="form-group">
                <label>Username hoặc Email</label>
                <input type="text" name="username" placeholder="Nhập username hoặc email..." required autofocus />
            </div>

            <div class="form-group">
                <label>Mật khẩu</label>
                <input type="password" name="password" placeholder="Nhập mật khẩu..." required />
            </div>

            <button class="btn primary full" type="submit">Đăng nhập</button>
        </form>

        <div class="auth-footer-links">
            <a th:href="@{/register}">Tạo tài khoản mới</a>
            <span>•</span>
            <a th:href="@{/forgot-password}">Quên mật khẩu?</a>
        </div>
    </div>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/auth/register.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Đăng ký tài khoản - IOTSTAR SHOP</title>
    <link rel="stylesheet" th:href="@{/css/app.css}">
</head>
<body class="auth-page">
    <div class="auth-card wide">
        <h1>IOTSTAR SHOP</h1>
        <h2>Đăng ký thành viên</h2>

        <div class="alert error" th:if="\${errorMessage}" th:text="\${errorMessage}"></div>

        <form th:action="@{/register}" th:object="\${registerDTO}" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label>Username</label>
                <input type="text" th:field="*{username}" placeholder="user01..." required />
                <span class="field-error" th:if="\${#fields.hasErrors('username')}" th:errors="*{username}"></span>
            </div>

            <div class="form-group">
                <label>Địa chỉ Email (Nhận mã OTP kích hoạt)</label>
                <input type="email" th:field="*{email}" placeholder="email@gmail.com..." required />
                <span class="field-error" th:if="\${#fields.hasErrors('email')}" th:errors="*{email}"></span>
            </div>

            <div class="form-group">
                <label>Họ và Tên</label>
                <input type="text" th:field="*{fullName}" placeholder="Nguyễn Văn A..." required />
                <span class="field-error" th:if="\${#fields.hasErrors('fullName')}" th:errors="*{fullName}"></span>
            </div>

            <div class="form-group">
                <label>Ảnh đại diện (Tự động upload lên Cloudinary)</label>
                <input type="file" name="avatarFile" accept="image/*" />
            </div>

            <div class="form-group">
                <label>Mật khẩu</label>
                <input type="password" th:field="*{password}" required />
                <span class="field-error" th:if="\${#fields.hasErrors('password')}" th:errors="*{password}"></span>
            </div>

            <div class="form-group">
                <label>Nhập lại mật khẩu</label>
                <input type="password" th:field="*{confirmPassword}" required />
                <span class="field-error" th:if="\${#fields.hasErrors('confirmPassword')}" th:errors="*{confirmPassword}"></span>
            </div>

            <button class="btn primary full" type="submit">Đăng ký & Nhận mã OTP qua Email</button>
        </form>

        <div class="auth-footer-links">
            Đã có tài khoản? <a th:href="@{/login}">Đăng nhập ngay</a>
        </div>
    </div>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/auth/verify-otp.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Xác thực mã OTP - IOTSTAR SHOP</title>
    <link rel="stylesheet" th:href="@{/css/app.css}">
</head>
<body class="auth-page">
    <div class="auth-card">
        <h1>IOTSTAR SHOP</h1>
        <h2>Xác thực OTP kích hoạt tài khoản</h2>

        <div class="alert success" th:if="\${successMessage}" th:text="\${successMessage}"></div>
        <div class="alert error" th:if="\${errorMessage}" th:text="\${errorMessage}"></div>

        <p class="hint-text">Mã OTP gồm 6 chữ số đã được gửi tới: <b th:text="\${verifyOtpDTO.email}"></b></p>

        <form th:action="@{/verify-otp}" th:object="\${verifyOtpDTO}" method="post">
            <input type="hidden" th:field="*{email}" />
            <input type="hidden" th:field="*{type}" />

            <div class="form-group">
                <label>Mã OTP (6 chữ số)</label>
                <input type="text" th:field="*{otp}" maxlength="6" style="text-align:center; font-size:24px; letter-spacing: 8px;" required autofocus />
                <span class="field-error" th:if="\${#fields.hasErrors('otp')}" th:errors="*{otp}"></span>
            </div>

            <button class="btn primary full" type="submit">Kích hoạt tài khoản</button>
        </form>

        <div class="auth-footer-links">
            <a th:href="@{/resend-otp(email=\${verifyOtpDTO.email})}">Chưa nhận được mã? Gửi lại OTP</a>
        </div>
    </div>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/auth/forgot-password.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Quên mật khẩu - IOTSTAR SHOP</title>
    <link rel="stylesheet" th:href="@{/css/app.css}">
</head>
<body class="auth-page">
    <div class="auth-card">
        <h1>IOTSTAR SHOP</h1>
        <h2>Quên mật khẩu</h2>

        <div class="alert error" th:if="\${errorMessage}" th:text="\${errorMessage}"></div>

        <form th:action="@{/forgot-password}" th:object="\${forgotPasswordDTO}" method="post">
            <div class="form-group">
                <label>Địa chỉ Email đã đăng ký</label>
                <input type="email" th:field="*{email}" placeholder="email@gmail.com..." required autofocus />
                <span class="field-error" th:if="\${#fields.hasErrors('email')}" th:errors="*{email}"></span>
            </div>

            <button class="btn primary full" type="submit">Gửi mã OTP đặt lại mật khẩu</button>
        </form>

        <div class="auth-footer-links">
            <a th:href="@{/login}">Quay lại đăng nhập</a>
        </div>
    </div>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/auth/reset-password.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Đặt lại mật khẩu - IOTSTAR SHOP</title>
    <link rel="stylesheet" th:href="@{/css/app.css}">
</head>
<body class="auth-page">
    <div class="auth-card">
        <h1>IOTSTAR SHOP</h1>
        <h2>Đặt lại mật khẩu mới</h2>

        <div class="alert error" th:if="\${errorMessage}" th:text="\${errorMessage}"></div>

        <form th:action="@{/reset-password}" th:object="\${resetPasswordDTO}" method="post">
            <input type="hidden" th:field="*{email}" />

            <div class="form-group">
                <label>Mã OTP từ Email</label>
                <input type="text" th:field="*{otp}" maxlength="6" style="text-align:center; font-size:22px; letter-spacing: 6px;" required autofocus />
                <span class="field-error" th:if="\${#fields.hasErrors('otp')}" th:errors="*{otp}"></span>
            </div>

            <div class="form-group">
                <label>Mật khẩu mới</label>
                <input type="password" th:field="*{newPassword}" required />
                <span class="field-error" th:if="\${#fields.hasErrors('newPassword')}" th:errors="*{newPassword}"></span>
            </div>

            <div class="form-group">
                <label>Nhập lại mật khẩu mới</label>
                <input type="password" th:field="*{confirmPassword}" required />
                <span class="field-error" th:if="\${#fields.hasErrors('confirmPassword')}" th:errors="*{confirmPassword}"></span>
            </div>

            <button class="btn primary full" type="submit">Xác nhận đổi mật khẩu</button>
        </form>

        <div class="auth-footer-links">
            <a th:href="@{/login}">Quay lại đăng nhập</a>
        </div>
    </div>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/admin/users/list.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layouts/layout}">
<head>
    <title>Quản lý Người dùng (Admin)</title>
</head>
<body>
<main layout:fragment="content" class="container">
    <div class="page-title">
        <div>
            <h2>Quản lý Người dùng (CRUD, Tìm kiếm & Phân trang)</h2>
            <p>Tổng số thành viên: <b th:text="\${totalUsers}"></b></p>
        </div>
        <a th:href="@{/admin/users/create}" class="btn primary">+ Thêm User mới</a>
    </div>

    <div class="alert success" th:if="\${successMessage}" th:text="\${successMessage}"></div>

    <form th:action="@{/admin/users}" method="get" class="search-bar">
        <input type="text" name="keyword" th:value="\${keyword}" placeholder="Tìm username, email, họ tên..." />
        <button type="submit" class="btn secondary">Tìm kiếm</button>
        <a th:if="\${keyword}" th:href="@{/admin/users}" class="btn link">Xóa lọc</a>
    </form>

    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Username</th>
                    <th>Họ và Tên</th>
                    <th>Email</th>
                    <th>Vai trò</th>
                    <th>Số sản phẩm</th>
                    <th>Kích hoạt</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                <tr th:each="u : \${userPage.content}">
                    <td>
                        <img th:src="\${u.images != null && !#strings.isEmpty(u.images) ? u.images : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}"
                             class="avatar-thumb" />
                    </td>
                    <td><strong th:text="\${u.username}">user01</strong></td>
                    <td th:text="\${u.fullName}">Họ Tên</td>
                    <td th:text="\${u.email}">email@domain.com</td>
                    <td>
                        <span class="badge" th:text="\${u.roleName}">ROLE_USER</span>
                    </td>
                    <td><b th:text="\${u.productCount}">0</b> SP</td>
                    <td>
                        <span th:if="\${u.enabled}" class="badge success">Đã kích hoạt</span>
                        <span th:unless="\${u.enabled}" class="badge warning">Chờ OTP</span>
                    </td>
                    <td class="actions">
                        <a th:href="@{/admin/users/edit/{id}(id=\${u.id})}" class="btn small secondary">Sửa</a>
                        <a th:href="@{/admin/users/delete/{id}(id=\${u.id})}"
                           onclick="return confirm('Bạn có chắc muốn xóa user này?');"
                           class="btn small danger">Xóa</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Phân trang theo yêu cầu bài toán -->
    <div class="pagination" th:if="\${userPage.totalPages > 1}">
        <a th:each="i : \${#numbers.sequence(0, userPage.totalPages - 1)}"
           th:href="@{/admin/users(page=\${i}, keyword=\${keyword})}"
           th:text="\${i + 1}"
           th:classappend="\${i == userPage.number} ? 'active' : ''">1</a>
    </div>
</main>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/admin/users/form.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layouts/layout}">
<head>
    <title th:text="\${userDTO.id != null ? 'Cập nhật Người dùng' : 'Thêm Người dùng'}">Người dùng</title>
</head>
<body>
<main layout:fragment="content" class="container narrow">
    <div class="panel">
        <h2 th:text="\${userDTO.id != null ? 'Cập nhật Người dùng' : 'Thêm Người dùng mới'}">Người dùng</h2>

        <form th:action="@{/admin/users/save}" th:object="\${userDTO}" method="post" enctype="multipart/form-data">
            <input type="hidden" th:field="*{id}" />

            <div class="form-group">
                <label>Username (*)</label>
                <input type="text" th:field="*{username}" required th:readonly="\${userDTO.id != null}" />
            </div>

            <div class="form-group">
                <label>Họ và Tên (*)</label>
                <input type="text" th:field="*{fullName}" required />
            </div>

            <div class="form-group">
                <label>Email (*)</label>
                <input type="email" th:field="*{email}" required />
            </div>

            <div class="form-group">
                <label>Mật khẩu <small th:if="\${userDTO.id != null}">(Để trống nếu không đổi)</small></label>
                <input type="password" name="password" th:required="\${userDTO.id == null}" />
            </div>

            <div class="form-group">
                <label>Vai trò (Role)</label>
                <select th:field="*{roleId}">
                    <option th:each="r : \${roles}" th:value="\${r.id}" th:text="\${r.name}"></option>
                </select>
            </div>

            <div class="form-group">
                <label>Ảnh đại diện (Upload Cloudinary)</label>
                <input type="file" name="avatarFile" accept="image/*" />
            </div>

            <div class="form-group" style="display:flex; align-items:center; gap:8px;">
                <input type="checkbox" th:field="*{enabled}" id="enabled" style="width:auto;" />
                <label for="enabled" style="margin:0;">Kích hoạt tài khoản</label>
            </div>

            <div class="form-actions">
                <button type="submit" class="btn primary">Lưu thông tin</button>
                <a th:href="@{/admin/users}" class="btn secondary">Quay lại danh sách</a>
            </div>
        </form>
    </div>
</main>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/products/list.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layouts/layout}">
<head>
    <title>Danh sách Sản phẩm</title>
</head>
<body>
<main layout:fragment="content" class="container">
    <div class="page-title">
        <div>
            <h2>Quản lý Sản phẩm (CRUD & Upload Cloudinary)</h2>
            <p>Tổng số: <b th:text="\${productPage.totalElements}"></b> sản phẩm</p>
        </div>
        <a th:href="@{/products/create}" class="btn primary">+ Thêm sản phẩm mới</a>
    </div>

    <div class="alert success" th:if="\${successMessage}" th:text="\${successMessage}"></div>

    <form th:action="@{/products}" method="get" class="search-bar">
        <input type="text" name="keyword" th:value="\${keyword}" placeholder="Tìm kiếm tên sản phẩm, mô tả..." />
        <button type="submit" class="btn secondary">Tìm kiếm</button>
        <a th:if="\${keyword}" th:href="@{/products}" class="btn link">Xóa lọc</a>
    </form>

    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>Ảnh (Cloudinary)</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá bán</th>
                    <th>Số lượng</th>
                    <th>Người tạo (1-n)</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr th:each="p : \${productPage.content}">
                    <td>
                        <img th:src="\${p.image != null && !#strings.isEmpty(p.image) ? p.image : 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'}"
                             alt="Product" class="thumb" />
                    </td>
                    <td>
                        <strong th:text="\${p.name}">Tên SP</strong>
                        <p class="desc" th:text="\${p.description}">Mô tả</p>
                    </td>
                    <td class="price" th:text="\${#numbers.formatDecimal(p.price, 0, 'COMMA', 0, 'POINT')} + ' đ'">0 đ</td>
                    <td th:text="\${p.quantity}">0</td>
                    <td>
                        <span th:text="\${p.userFullName}">Chủ sở hữu</span>
                        <small th:text="'(' + \${p.userName} + ')'" style="display:block; color:#64748b;"></small>
                    </td>
                    <td class="actions">
                        <a th:href="@{/products/edit/{id}(id=\${p.id})}" class="btn small secondary">Sửa</a>
                        <a th:href="@{/products/delete/{id}(id=\${p.id})}"
                           onclick="return confirm('Bạn có chắc muốn xóa sản phẩm này?');"
                           class="btn small danger">Xóa</a>
                    </td>
                </tr>
                <tr th:if="\${productPage.totalElements == 0}">
                    <td colspan="6" style="text-align:center; padding: 30px;">Không có sản phẩm nào.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Phân trang Product -->
    <div class="pagination" th:if="\${productPage.totalPages > 1}">
        <a th:each="i : \${#numbers.sequence(0, productPage.totalPages - 1)}"
           th:href="@{/products(page=\${i}, keyword=\${keyword})}"
           th:text="\${i + 1}"
           th:classappend="\${i == productPage.number} ? 'active' : ''">1</a>
    </div>
</main>
</body>
</html>`
  },
  {
    path: "src/main/resources/templates/products/form.html",
    category: "template",
    content: `<!DOCTYPE html>
<html lang="vi" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layouts/layout}">
<head>
    <title th:text="\${productDTO.id != null ? 'Chỉnh sửa Sản phẩm' : 'Thêm Sản phẩm'}">Sản phẩm</title>
</head>
<body>
<main layout:fragment="content" class="container narrow">
    <div class="panel">
        <h2 th:text="\${productDTO.id != null ? 'Chỉnh sửa Sản phẩm' : 'Thêm Sản phẩm mới'}">Thêm sản phẩm</h2>

        <form th:action="@{/products/save}" th:object="\${productDTO}" method="post" enctype="multipart/form-data">
            <input type="hidden" th:field="*{id}" />

            <div class="form-group">
                <label>Tên sản phẩm (*)</label>
                <input type="text" th:field="*{name}" required />
                <span class="field-error" th:if="\${#fields.hasErrors('name')}" th:errors="*{name}"></span>
            </div>

            <div class="form-group">
                <label>Đơn giá (VNĐ) (*)</label>
                <input type="number" step="1000" th:field="*{price}" required />
                <span class="field-error" th:if="\${#fields.hasErrors('price')}" th:errors="*{price}"></span>
            </div>

            <div class="form-group">
                <label>Số lượng kho (*)</label>
                <input type="number" th:field="*{quantity}" required />
                <span class="field-error" th:if="\${#fields.hasErrors('quantity')}" th:errors="*{quantity}"></span>
            </div>

            <div class="form-group">
                <label>Mô tả chi tiết</label>
                <textarea th:field="*{description}" rows="4"></textarea>
            </div>

            <div class="form-group">
                <label>Hình ảnh sản phẩm (Upload tự động lên Cloudinary)</label>
                <input type="file" name="imageFile" accept="image/*" />
                <div th:if="*{image != null}" style="margin-top: 8px;">
                    <small>Ảnh hiện tại:</small><br>
                    <img th:src="*{image}" width="100" style="border-radius: 6px; margin-top: 4px;" />
                </div>
            </div>

            <div class="form-actions">
                <button type="submit" class="btn primary">Lưu sản phẩm</button>
                <a th:href="@{/products}" class="btn secondary">Quay lại danh sách</a>
            </div>
        </form>
    </div>
</main>
</body>
</html>`
  },
  {
    path: "src/main/resources/static/css/app.css",
    category: "resource",
    content: `* { box-sizing: border-box; }
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: #f8fafc;
    color: #0f172a;
}
.topbar {
    height: 68px;
    background: #0f172a;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 24px;
    gap: 24px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.brand a {
    color: #38bdf8;
    text-decoration: none;
    font-weight: 800;
    font-size: 20px;
}
.nav-links {
    display: flex;
    gap: 18px;
    flex: 1;
}
.nav-links a {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
}
.nav-links a:hover { color: #fff; }
.account {
    display: flex;
    align-items: center;
    gap: 10px;
}
.avatar-thumb {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #38bdf8;
}
.user-meta {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}
.user-meta strong {
    font-size: 14px;
    color: #f1f5f9;
}
.user-sub {
    font-size: 11px;
    color: #94a3b8;
    display: flex;
    gap: 4px;
    align-items: center;
}
.badge {
    display: inline-block;
    padding: 2px 6px;
    border-radius: 4px;
    background: #334155;
    color: #e2e8f0;
    font-size: 10px;
    font-weight: 600;
}
.badge.success { background: #dcfce7; color: #166534; }
.badge.warning { background: #fef3c7; color: #92400e; }
.container {
    max-width: 1200px;
    margin: 32px auto;
    padding: 0 20px;
}
.narrow { max-width: 650px; }
.page-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 28px;
}
.card {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}
.card b {
    display: block;
    color: #64748b;
    font-size: 12px;
}
.card strong {
    display: block;
    font-size: 32px;
    color: #0f172a;
    margin: 8px 0;
}
.card-hint { font-size: 12px; color: #94a3b8; }
.table-wrap {
    overflow-x: auto;
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}
table { width: 100%; border-collapse: collapse; }
th, td {
    padding: 14px 16px;
    text-align: left;
    border-bottom: 1px solid #f1f5f9;
}
th { background: #f8fafc; font-size: 13px; font-weight: 600; color: #475569; }
.thumb {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
    background: #e2e8f0;
}
.btn {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    border: none;
    cursor: pointer;
    text-decoration: none;
}
.btn.primary { background: #0284c7; color: #fff; }
.btn.secondary { background: #e2e8f0; color: #334155; }
.btn.danger { background: #ef4444; color: #fff; }
.btn.small { padding: 5px 10px; font-size: 12px; }
.btn.full { width: 100%; }
.btn-logout { background: #ef4444; color: #fff; font-size: 12px; padding: 4px 10px; }
.search-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
}
.search-bar input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
}
.auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%);
    padding: 20px;
}
.auth-card {
    background: #fff;
    width: 100%;
    max-width: 420px;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
}
.auth-card.wide { max-width: 500px; }
.auth-card h1 { font-size: 24px; color: #0284c7; margin: 0 0 6px; }
.auth-card h2 { font-size: 18px; color: #334155; margin: 0 0 20px; font-weight: 500; }
.form-group { margin-bottom: 16px; }
.form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 13px;
    color: #334155;
}
.form-group input, .form-group textarea, .form-group select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 14px;
}
.alert {
    padding: 12px;
    border-radius: 8px;
    font-size: 13px;
    margin-bottom: 16px;
}
.alert.error { background: #fee2e2; color: #991b1b; }
.alert.success { background: #dcfce7; color: #166534; }
.field-error { color: #dc2626; font-size: 12px; margin-top: 4px; display: block; }
.pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
}
.pagination a {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    background: #fff;
    color: #334155;
    text-decoration: none;
}
.pagination a.active {
    background: #0284c7;
    color: #fff;
    border-color: #0284c7;
}
.footer {
    text-align: center;
    padding: 30px;
    color: #64748b;
    font-size: 13px;
}`
  }
];
