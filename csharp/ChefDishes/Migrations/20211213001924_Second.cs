using Microsoft.EntityFrameworkCore.Migrations;

namespace ChefDishes.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ChefName",
                table: "Dishes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ChefName",
                table: "Dishes",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: true);
        }
    }
}
